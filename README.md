# Exhibition Assistant

这是一个部署到 GitHub Pages 的静态展会助手。发布页仍位于仓库根目录，以保持现有 Pages 配置 `main:/` 不变。

## 日常维护

- 页面逻辑：`src/scripts/`
- 样式：`src/styles/`
- 页面入口模板：`src/index.template.html`
- 展会唯一原始数据：`data-source/events/<展会编号>.json`
- 构建与数据一致性校验：`scripts/build.mjs`

每场展会只在自己的详情 JSON 中维护。`npm run build` 会校验字段、自动生成列表摘要，并重新生成根目录的 `index.html`、`assets/` 与 `data/`。这些发布文件不应手动修改。

执行 `npm run validate` 只校验源数据和构建前提，不写入发布文件。首次需要格式化源码时，先安装依赖后执行 `npm run format`。

当前应用逻辑由既有可运行的浏览器包迁入 `src/scripts/`，构建过程会自动更新其数据摘要引用；未来可按功能逐步拆分该文件，而不影响现有发布契约。

## 表格批量维护

导出：`npm run data:export -- ./events.csv`；编辑后导入：`npm run data:import -- ./events.csv`。导入以 `key` 匹配记录，只写入实际有变化的数据，并在写入前备份到未纳入 Git 的 `.data-backups/`。数组与复杂字段使用 JSON 文本；导入后运行 `npm run validate` 和 `npm run build`。
