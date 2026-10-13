import { createHash } from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { minify } from "terser";
import { loadEvents, toSummary } from "./event-data.mjs";

const root = resolve(import.meta.dirname, "..");
const source = (...parts) => join(root, ...parts);
const digest = (content) =>
  createHash("sha256").update(content).digest("hex").slice(0, 12);
const text = (path) => readFileSync(path, "utf8");
const checkOnly = process.argv.includes("--check");

const eventsDir = source("data-source", "events");
if (!existsSync(eventsDir))
  throw new Error("缺少 data-source 展会数据。");

const sourceEvents = loadEvents(eventsDir);
const summaries = sourceEvents.map(({ event }) => toSummary(event));

const buildEvent = new Map();
for (const { event } of sourceEvents) {
  const content = `${JSON.stringify(event, null, 2)}\n`;
  buildEvent.set(event.key, {
    filename: `${event.key}.${digest(content)}.json`,
    content,
  });
}
const builtSummaries = summaries.map((summary) => ({
  ...summary,
  detailPath: `data/events/${buildEvent.get(summary.key).filename}`,
}));
const summaryContent = `${JSON.stringify(builtSummaries, null, 2)}\n`;

const appCss = text(source("src", "styles", "app.css"));
let appJs = text(source("src", "scripts", "app.js"));
const enhancementsSource = text(source("src", "scripts", "enhancements.js"));
const cssFile = `app.${digest(appCss)}.css`;
const summaryFile = `events-summary.${digest(summaryContent)}.json`;
const summaryReference = /data\/events-summary\.[a-f0-9]+\.json/g;
const oldReferences = appJs.match(summaryReference) ?? [];
if (oldReferences.length !== 1)
  throw new Error(
    `主应用必须恰好引用一次摘要数据，实际为 ${oldReferences.length} 次。`,
  );
appJs = appJs.replace(summaryReference, `data/${summaryFile}`);
const compressJavaScript = async (label, content) => {
  const result = await minify(content, {
    module: true,
    compress: true,
    mangle: true,
    format: { comments: false },
  });
  if (!result.code) throw new Error(`${label} 压缩失败。`);
  return `${result.code}\n`;
};
const publishedAppJs = await compressJavaScript("主应用", appJs);
const enhancementsJs = await compressJavaScript("增强脚本", enhancementsSource);
const appFile = `app.${digest(publishedAppJs)}.js`;
const enhancementFile = `enhancements.${digest(enhancementsJs)}.js`;

const template = text(source("src", "index.template.html"));
const replacements = {
  "{{EVENTS_SUMMARY}}": `data/${summaryFile}`,
  "{{APP_CSS}}": `assets/${cssFile}`,
  "{{APP_JS}}": `assets/${appFile}`,
  "{{ENHANCEMENTS_JS}}": `assets/${enhancementFile}`,
};
const index = Object.entries(replacements).reduce(
  (output, [token, value]) => output.replace(token, value),
  template,
);
if (/\{\{[A-Z_]+\}\}/.test(index))
  throw new Error("index 模板仍有未替换占位符。");

const publishedFiles = new Map([
  ["index.html", index],
  [join("assets", cssFile), appCss],
  [join("assets", appFile), publishedAppJs],
  [join("assets", enhancementFile), enhancementsJs],
  [join("data", summaryFile), summaryContent],
  ...[...buildEvent.values()].map(({ filename, content }) => [
    join("data", "events", filename),
    content,
  ]),
]);

if (checkOnly) {
  for (const [relativePath, expected] of publishedFiles) {
    const outputPath = source(relativePath);
    if (!existsSync(outputPath) || text(outputPath) !== expected)
      throw new Error(
        `发布文件过期或缺失：${relativePath}；请执行 npm run build。`,
      );
  }
  const publishedEventCount = readdirSync(source("data", "events")).filter(
    (name) => name.endsWith(".json"),
  ).length;
  if (publishedEventCount !== buildEvent.size)
    throw new Error(
      `发布详情文件数量应为 ${buildEvent.size}，实际为 ${publishedEventCount}。`,
    );
} else {
  rmSync(source("assets"), { recursive: true, force: true });
  rmSync(source("data"), { recursive: true, force: true });
  mkdirSync(source("assets"), { recursive: true });
  mkdirSync(source("data", "events"), { recursive: true });
  for (const [relativePath, content] of publishedFiles)
    writeFileSync(source(relativePath), content);
  writeFileSync(source(".nojekyll"), "");
}

console.log(
  JSON.stringify({
    valid: true,
    events: summaries.length,
    assets: [cssFile, appFile, enhancementFile],
    summary: summaryFile,
    mode: checkOnly ? "check" : "build",
  }),
);
