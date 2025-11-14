# flow-vue-ori

基于 Vue 2 + TypeScript 的项目脚手架，参照当前 package.json（Vue CLI 3.x 配置与依赖）。

环境要求：
- Node：`10.15.3`（使用 nvm 管理版本）
- npm：建议 `6.x`

快速开始：
- 安装并切换 Node 版本：
  - 安装 nvm 后，在项目根目录执行：`nvm use`（读取 `.nvmrc`）
- 安装依赖：`npm install`
- 启动开发：`npm run serve`
- 单元测试：`npm run test:unit`

说明：
- 为兼容 Node 10.15.3，保留了 `@vue/cli-service@^3.12.1` 及相关依赖版本。
- 如需 E2E 测试，请补充对应 CLI 插件或移除 `test:e2e` 脚本。