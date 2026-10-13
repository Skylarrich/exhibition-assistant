# Exhibition Assistant

这是一个部署到 GitHub Pages 的静态展会助手。发布页仍位于仓库根目录，以保持现有 Pages 配置 `main:/` 不变。

## 日常维护

- 页面逻辑：`src/scripts/`
- 样式：`src/styles/`
- 页面入口模板：`src/index.template.html`
- 展会原始数据：`data-source/`
- 构建与数据一致性校验：`scripts/build.mjs`

执行 `npm run build` 会校验 599 条摘要与详情的对应关系，并从上述源码重新生成根目录的 `index.html`、`assets/` 与 `data/`。这些生成目录是 GitHub Pages 实际读取的发布文件，不应手动修改。

执行 `npm run validate` 只校验源数据和构建前提，不写入发布文件。首次需要格式化源码时，先安装依赖后执行 `npm run format`。

当前应用逻辑由既有可运行的浏览器包迁入 `src/scripts/`，构建过程会自动更新其数据摘要引用；未来可按功能逐步拆分该文件，而不影响现有发布契约。
