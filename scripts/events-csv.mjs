import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { loadEvents, validateEvent } from "./event-data.mjs";

const root = resolve(import.meta.dirname, "..");
const eventsDir = join(root, "data-source", "events");
const [command, suppliedPath] = process.argv.slice(2);
const csvPath = suppliedPath && resolve(process.cwd(), suppliedPath);
const fail = (message) => { throw new Error(message); };
const quote = (value) => { const text = value == null ? "" : String(value); return /[",\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text; };

function parseCsv(text) {
  const rows = []; let row = []; let value = ""; let quoted = false;
  for (let i = 0; i < text.length; i += 1) { const char = text[i];
    if (quoted) { if (char === '"' && text[i + 1] === '"') { value += '"'; i += 1; } else if (char === '"') quoted = false; else value += char; }
    else if (char === '"') { if (value) fail(`CSV 第 ${rows.length + 1} 行的引号位置错误。`); quoted = true; }
    else if (char === ",") { row.push(value); value = ""; }
    else if (char === "\n" || char === "\r") { if (char === "\r" && text[i + 1] === "\n") i += 1; row.push(value); if (row.some(Boolean)) rows.push(row); row = []; value = ""; }
    else value += char;
  }
  if (quoted) fail("CSV 存在未闭合的引号。");
  if (value || row.length) { row.push(value); rows.push(row); }
  return rows;
}

function exportCsv(path) {
  const events = loadEvents(eventsDir); const fields = [...new Set(events.flatMap(({ event }) => Object.keys(event)))];
  const lines = [fields.map(quote).join(","), ...events.map(({ event }) => fields.map((field) => quote(typeof event[field] === "object" ? JSON.stringify(event[field]) : event[field])).join(","))];
  mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, `${lines.join("\n")}\n`); console.log(JSON.stringify({ exported: events.length, path }));
}

function importCsv(path) {
  if (!existsSync(path)) fail(`找不到 CSV：${path}`);
  const events = loadEvents(eventsDir); const byKey = new Map(events.map(({ event }) => [event.key, event]));
  const [headers, ...rows] = parseCsv(readFileSync(path, "utf8"));
  if (!headers?.includes("key") || new Set(headers).size !== headers.length) fail("CSV 必须有唯一的 key 列和无重复表头。");
  const complex = new Set(events.flatMap(({ event }) => Object.entries(event).filter(([, value]) => value && typeof value === "object").map(([field]) => field)));
  const seen = new Set(); const changed = [];
  for (let index = 0; index < rows.length; index += 1) { const row = rows[index]; if (row.length !== headers.length) fail(`CSV 第 ${index + 2} 行的列数不匹配。`); const record = Object.fromEntries(headers.map((field, column) => [field, row[column]]));
    if (!record.key || seen.has(record.key)) fail(`CSV key 无效或重复：${record.key || "(空)"}`); seen.add(record.key); const original = byKey.get(record.key) ?? {}; const event = structuredClone(original);
    for (const [field, value] of Object.entries(record)) { if (field === "key" || value === "") continue; if (complex.has(field)) { try { event[field] = JSON.parse(value); } catch { fail(`${record.key} 的 ${field} 必须是合法 JSON。`); } } else if (typeof original[field] === "number") { if (!Number.isFinite(Number(value))) fail(`${record.key} 的 ${field} 必须是数字。`); event[field] = Number(value); } else event[field] = value; }
    event.key = record.key; validateEvent(event); if (JSON.stringify(event) !== JSON.stringify(original)) changed.push(event);
  }
  if (!changed.length) return console.log(JSON.stringify({ imported: 0, backup: null }));
  const backup = join(root, ".data-backups", new Date().toISOString().replaceAll(/[:.]/g, "-")); mkdirSync(backup, { recursive: true }); cpSync(eventsDir, join(backup, "events"), { recursive: true });
  for (const event of changed) writeFileSync(join(eventsDir, `${event.key}.json`), `${JSON.stringify(event, null, 2)}\n`); console.log(JSON.stringify({ imported: changed.length, backup }));
}

if (!csvPath || !["export", "import"].includes(command)) fail("用法：node scripts/events-csv.mjs <export|import> <CSV 路径>");
if (command === "export") exportCsv(csvPath); else importCsv(csvPath);
