# Jasper Jia — Finance × AI Explorer

## V1.0 页面框架

四个独立入口：`/` 关于（网站首页）、`/projects` 项目、`/writing` 文章、`/ai-lab` 实验室。原 `/about` 和 `/contact` 使用 308 永久重定向到 `/`，不再独立显示页面。联系方式在首页个人介绍下方，可通过 `/#connect` 访问。

首页保留完整的 My Story、Education、Experience、Skills、Beyond Work 内容；首屏右侧通过 `app/finance-orbit.tsx` 复用原首页的 F × AI 轨道动画与全局 CSS 动画规则，移动端显示在个人信息下方。

项目详情位于 `/projects/[slug]`，文章详情位于 `/writing/[slug]`，均从 `app/content.ts` 的条目生成。无效 slug 返回 404。文章列表支持全部、金融、AI 和个人成长分类筛选。文章仍是未发布选题，详情是明确标注的占位模板。

共用导航、页脚和语言状态在 `app/site-shell.tsx`；项目、文章、实验室页面在 `app/site-pages.tsx`；新增条目请维护 `app/content.ts`。首页的个人经历与双语内容位于 `app/about/profile.tsx` 和 `app/about/profile-data.ts`，局部样式在 `app/about/profile.module.css`。每个页面支持双语切换，语言选择在跨页导航和刷新后保留。AI Lab 不连接任何真实 AI API 或付费服务。

Bilingual homepage for jasperjia.work. Built with Next.js App Router, React, TypeScript and Tailwind CSS. Currently for local preview; no website deployment or domain changes have been performed.

## Preview

Install Node.js 20.9+ and run:

```sh
npm install
npm run dev
```

Open http://localhost:3000. Production validation: `npm run build`. Start a built version: `npm start`.

## Content

Edit bilingual copy in `app/page.tsx` and visual styles in `app/globals.css`. Education is explicitly pending. Projects are concepts; writing entries are unpublished topic drafts. The AI Lab is a local task-card demo, not a connected AI model. The only biographical work claim comes from the supplied CITIC Securities internship information.

Language selection persists locally. Navigation, project detail pages, mobile menu and Lab task selection work without external services. Reduced-motion preference is respected. Search indexing is disabled for this preview; review metadata before future publication.

Source repository: [Sharpieiscoming/jasperjia-website](https://github.com/Sharpieiscoming/jasperjia-website).

## 安装、运行与文件结构

需要 Node.js 20.9+ 和 npm。在克隆后的项目目录运行 `npm ci` 安装锁定版本的依赖，然后运行 `npm run dev`，打开 <http://127.0.0.1:3000>。

生产构建与本机验证：

```sh
npm run build
npm start
```

开发与生产预览默认仅监听本机地址 `127.0.0.1:3000`，采用 webpack 编译以适配当前本机环境。

```text
app/layout.tsx        页面框架、站点标题、描述与索引设置
app/page.tsx          双语文案、全部首页区域与交互
app/globals.css       Tailwind 入口、视觉样式、动画与响应式规则
postcss.config.mjs    Tailwind / PostCSS 配置
tsconfig.json        TypeScript 配置
next-env.d.ts        Next.js 类型声明
package.json         依赖与运行命令
package-lock.json    锁定的依赖版本
.gitignore           排除依赖、构建产物与敏感文件
```

## 未来部署说明（本次不执行）

### 支持 Next.js 的托管平台

1. 导入本仓库，选择 Next.js 项目类型。
2. 安装命令使用 `npm ci`，构建命令使用 `npm run build`。
3. 保持平台的 Next.js 默认输出设置，不把 `.next` 当作普通静态目录上传。
4. 先用平台测试地址验证，再决定是否绑定域名。

### 自有 Node.js 服务器

```sh
npm ci
npm run build
npm start
```

`npm start` 仅在本机监听；正式运行可由同机反向代理转发到 `127.0.0.1:3000`，并单独配置 HTTPS 和进程管理。域名绑定和阿里云 DNS 修改是独立操作，需另行授权，本次不会执行。

正式公开前，请核实教育与实习经历、替换概念项目和博客选题，并按需要调整 `app/layout.tsx` 中的 `robots`（当前禁止搜索引擎索引）。

## 凭据与敏感信息

项目无需任何 API Key 或密码。AI Lab 为本地任务卡演示，没有连接 AI 服务。不要将令牌或密码写入源代码；`.gitignore` 排除了 `.env*`、私钥、证书和本机 npm 配置。`node_modules` 与 `.next` 不应提交，其他电脑通过 `npm ci` 还原依赖。
