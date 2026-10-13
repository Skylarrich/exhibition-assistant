import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

export const SUMMARY_FIELDS = [
  "key", "name", "brands", "featuredBrands", "type", "format", "start", "end",
  "city", "country", "venue", "organizer", "theme", "industry", "audience",
  "targetCustomers", "aliases", "description", "deadlineDate", "deadlineSummary",
  "analyses", "verification",
];

const DATE_STATUSES = new Set(["无法核验", "截至核验日，官方尚未公布"]);
const text = (path) => readFileSync(path, "utf8");
const json = (path) => JSON.parse(text(path));
const isIsoDate = (value) =>
  value === "" || value == null || DATE_STATUSES.has(value) || /^\d{4}-\d{2}-\d{2}$/.test(value);

export function validateEvent(event, filename) {
  const label = filename ?? event?.key ?? "未知记录";
  if (!event || typeof event !== "object" || Array.isArray(event)) throw new Error(`${label} 必须是 JSON 对象。`);
  if (!event.key || typeof event.key !== "string") throw new Error(`${label} 缺少文本 key。`);
  if (filename && basename(filename, ".json") !== event.key) throw new Error(`详情文件名与 key 不一致：${basename(filename)}`);
  if (!event.name || typeof event.name !== "string") throw new Error(`${event.key} 缺少展会名称。`);
  if (!Array.isArray(event.brands)) throw new Error(`${event.key} 的 brands 必须为数组。`);
  for (const field of ["start", "end", "deadlineDate", "lastVerified"]) {
    if (!isIsoDate(event[field])) throw new Error(`${event.key} 的 ${field} 必须使用 YYYY-MM-DD。`);
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(event.start) && /^\d{4}-\d{2}-\d{2}$/.test(event.end) && event.end < event.start)
    throw new Error(`${event.key} 的结束日期早于开始日期。`);
}

export function loadEvents(eventsDir) {
  const filenames = readdirSync(eventsDir).filter((name) => name.endsWith(".json")).sort();
  if (filenames.length === 0) throw new Error("未找到任何详情 JSON。");
  const keys = new Set();
  return filenames.map((filename) => {
    const event = json(join(eventsDir, filename));
    validateEvent(event, filename);
    if (keys.has(event.key)) throw new Error(`重复详情 key：${event.key}`);
    keys.add(event.key);
    return { filename, event };
  });
}

export function toSummary(event) {
  return Object.fromEntries(SUMMARY_FIELDS.filter((field) => field in event).map((field) => {
    if (field === "analyses") {
      return [field, Object.fromEntries(Object.entries(event.analyses).map(([brand, analysis]) => [brand, { grade: analysis.grade, score: analysis.score }]))];
    }
    if (field === "verification") return [field, { isFormallyVerified: event.verification.isFormallyVerified }];
    return [field, event[field]];
  }));
}
