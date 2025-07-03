# React + TypeScript + Vite

# React 现代化开发模板 (React Template Project)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

这是一个功能完备、生产就绪的 React 项目模板，旨在提供一个现代化的、高效的、可扩展的前端开发起点。它集成了当前社区最流行和推荐的工具链，并包含了常见功能的实现案例。

**👉 [在线访问示例 (Live Demo)](https://your-project-url.vercel.app)**
*(请将 `your-project-url.vercel.app` 替换为您自己的 Vercel 部署地址)*

## ✨ 主要特性 (Features)

- **⚡️ 极速构建工具**: 使用 [**Vite**](https://vitejs.dev/)，享受闪电般的冷启动和热更新（HMR）。
- **⚛️ 最新 React 实践**: 基于 [**React 18**](https://reactjs.org/)，使用函数式组件和 Hooks。
- **🔒 强类型支持**: 全面拥抱 [**TypeScript**](https://www.typescriptlang.org/)，保证代码健壮性和可维护性。
- **🗺️ 路由管理**: 集成 [**React Router v6**](https://reactrouter.com/)，包含动态路由、嵌套路由和懒加载示例。
- **📦 全局状态管理**: 选用轻量级状态管理库 [**Zustand**](https://github.com/pmndrs/zustand)，API 简洁，无需 Provider。
- **🔄 服务端状态管理**: 集成 [**TanStack Query v4 (React Query)**](https://tanstack.com/query/v4)，优雅地处理数据请求、缓存和同步。
- **📝 高效表单处理**: 使用 [**React Hook Form**](https://react-hook-form.com/) 处理复杂的表单逻辑和校验。
- **🎨 代码规范与格式化**: 内置 [**ESLint**](https://eslint.org/) 和 [**Prettier**](https://prettier.io/)，自动检查和格式化代码，保持团队风格统一。
- **✂️ 性能优化**: 通过 `React.lazy` 和 `Suspense` 实现基于路由的代码分割（懒加载）。
- **🌐 环境变量**: 区分开发环境 (`.env.development`) 和生产环境 (`.env.production`) 配置。
- **📁 清晰的目录结构**: 预设了标准化的项目目录，便于团队协作和项目扩展。
- **🚀 一键部署**: 完美支持 [**Vercel**](https://vercel.com/) 平台，实现 CI/CD 自动化部署。

## 🛠️ 技术栈 (Technology Stack)

- **框架**: React 18, Vite
- **语言**: TypeScript
- **路由**: React Router
- **状态管理**: Zustand
- **数据请求**: TanStack Query, Axios
- **表单**: React Hook Form
- **代码规范**: ESLint, Prettier

## 📁 项目结构 (Project Structure)

项目采用模块化的目录结构，方便维护和查找代码。

```
/
├── dist/                   # 构建输出目录
├── public/                 # 公共静态资源
├── src/
│   ├── api/                # API 请求函数和 Axios 实例
│   ├── assets/             # 图片、字体等本地资源
│   ├── components/         # 可复用的 UI 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── pages/              # 页面级组件
│   ├── router/             # 路由配置
│   ├── store/              # 全局状态 (Zustand)
│   ├── styles/             # 全局样式文件
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 应用根组件 (布局)
│   ├── main.tsx            # 应用入口文件
│   └── vite-env.d.ts       # Vite 的 TypeScript 类型定义
├── .eslintrc.cjs           # ESLint 配置文件
├── .prettierrc.cjs         # Prettier 配置文件
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 就是你正在看的这个文件
```

## 🚀 快速开始 (Getting Started)

### 环境要求

- [Node.js](https://nodejs.org/) >= 18.0.0
- [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [npm](https://www.npmjs.com/)

### 安装与启动

1. **克隆项目到本地**

   ```bash
   git clone https://github.com/your-username/react-template.git
   ```

   *(请将 `your-username/react-template` 替换为你的仓库地址)*
2. **进入项目目录**

   ```bash
   cd react-template
   ```
3. **安装依赖**

   ```bash
   npm install
   ```
4. **启动开发服务器**

   ```bash
   npm run dev
   ```

   项目将在 `http://localhost:5173` (或其他可用端口) 启动。

## 📜 可用脚本 (Available Scripts)

在 `package.json` 中定义了以下常用脚本：

- `npm run dev`: 启动开发服务器。
- `npm run build`: 构建生产版本的应用到 `dist` 目录。
- `npm run lint`: 使用 ESLint 检查代码规范。
- `npm run format`: 使用 Prettier 格式化所有代码。
- `npm run preview`: 在本地预览生产构建后的应用。

## ☁️ 部署 (Deployment)

本项目已预先配置好，可直接部署到 [Vercel](https://vercel.com/)。

1. 将你的代码推送到 GitHub 仓库。
2. 在 Vercel 上，选择 "Import Project" 并选择你的 GitHub 仓库。
3. Vercel 会自动识别出这是一个 Vite 项目并配置好构建命令 (`npm run build`) 和输出目录 (`dist`)。
4. 点击 "Deploy"，完成！

之后，每当你向主分支 `push` 代码时，Vercel 都会自动为你构建和部署新版本。

## 📄 许可证 (License)

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 授权。

# React 现代化开发模板 (React Template Project)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

这是一个功能完备、生产就绪的 React 项目模板，旨在提供一个现代化的、高效的、可扩展的前端开发起点。它集成了当前社区最流行和推荐的工具链，并包含了常见功能的实现案例。

**👉 [在线访问示例 (Live Demo)](https://your-project-url.vercel.app)**
*(请将 `your-project-url.vercel.app` 替换为您自己的 Vercel 部署地址)*

## ✨ 主要特性 (Features)

- **⚡️ 极速构建工具**: 使用 [**Vite**](https://vitejs.dev/)，享受闪电般的冷启动和热更新（HMR）。
- **⚛️ 最新 React 实践**: 基于 [**React 18**](https://reactjs.org/)，使用函数式组件和 Hooks。
- **🔒 强类型支持**: 全面拥抱 [**TypeScript**](https://www.typescriptlang.org/)，保证代码健壮性和可维护性。
- **🗺️ 路由管理**: 集成 [**React Router v6**](https://reactrouter.com/)，包含动态路由、嵌套路由和懒加载示例。
- **📦 全局状态管理**: 选用轻量级状态管理库 [**Zustand**](https://github.com/pmndrs/zustand)，API 简洁，无需 Provider。
- **🔄 服务端状态管理**: 集成 [**TanStack Query v4 (React Query)**](https://tanstack.com/query/v4)，优雅地处理数据请求、缓存和同步。
- **📝 高效表单处理**: 使用 [**React Hook Form**](https://react-hook-form.com/) 处理复杂的表单逻辑和校验。
- **🎨 代码规范与格式化**: 内置 [**ESLint**](https://eslint.org/) 和 [**Prettier**](https://prettier.io/)，自动检查和格式化代码，保持团队风格统一。
- **✂️ 性能优化**: 通过 `React.lazy` 和 `Suspense` 实现基于路由的代码分割（懒加载）。
- **🌐 环境变量**: 区分开发环境 (`.env.development`) 和生产环境 (`.env.production`) 配置。
- **📁 清晰的目录结构**: 预设了标准化的项目目录，便于团队协作和项目扩展。
- **🚀 一键部署**: 完美支持 [**Vercel**](https://vercel.com/) 平台，实现 CI/CD 自动化部署。

## 🛠️ 技术栈 (Technology Stack)

- **框架**: React 18, Vite
- **语言**: TypeScript
- **路由**: React Router
- **状态管理**: Zustand
- **数据请求**: TanStack Query, Axios
- **表单**: React Hook Form
- **代码规范**: ESLint, Prettier

## 📁 项目结构 (Project Structure)

项目采用模块化的目录结构，方便维护和查找代码。

```
/
├── dist/                   # 构建输出目录
├── public/                 # 公共静态资源
├── src/
│   ├── api/                # API 请求函数和 Axios 实例
│   ├── assets/             # 图片、字体等本地资源
│   ├── components/         # 可复用的 UI 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── pages/              # 页面级组件
│   ├── router/             # 路由配置
│   ├── store/              # 全局状态 (Zustand)
│   ├── styles/             # 全局样式文件
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 应用根组件 (布局)
│   ├── main.tsx            # 应用入口文件
│   └── vite-env.d.ts       # Vite 的 TypeScript 类型定义
├── .eslintrc.cjs           # ESLint 配置文件
├── .prettierrc.cjs         # Prettier 配置文件
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 就是你正在看的这个文件
```

## 🚀 快速开始 (Getting Started)

### 环境要求

- [Node.js](https://nodejs.org/) >= 18.0.0
- [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [npm](https://www.npmjs.com/)

### 安装与启动

1. **克隆项目到本地**

   ```bash
   git clone https://github.com/your-username/react-template.git
   ```

   *(请将 `your-username/react-template` 替换为你的仓库地址)*
2. **进入项目目录**

   ```bash
   cd react-template
   ```
3. **安装依赖**

   ```bash
   npm install
   ```
4. **启动开发服务器**

   ```bash
   npm run dev
   ```

   项目将在 `http://localhost:5173` (或其他可用端口) 启动。

## 📜 可用脚本 (Available Scripts)

在 `package.json` 中定义了以下常用脚本：

- `npm run dev`: 启动开发服务器。
- `npm run build`: 构建生产版本的应用到 `dist` 目录。
- `npm run lint`: 使用 ESLint 检查代码规范。
- `npm run format`: 使用 Prettier 格式化所有代码。
- `npm run preview`: 在本地预览生产构建后的应用。

## ☁️ 部署 (Deployment)

本项目已预先配置好，可直接部署到 [Vercel](https://vercel.com/)。

1. 将你的代码推送到 GitHub 仓库。
2. 在 Vercel 上，选择 "Import Project" 并选择你的 GitHub 仓库。
3. Vercel 会自动识别出这是一个 Vite 项目并配置好构建命令 (`npm run build`) 和输出目录 (`dist`)。
4. 点击 "Deploy"，完成！

之后，每当你向主分支 `push` 代码时，Vercel 都会自动为你构建和部署新版本。

## 📄 许可证 (License)

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 授权。

# React 现代化开发模板 (React Template Project)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-purple)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

这是一个功能完备、生产就绪的 React 项目模板，旨在提供一个现代化的、高效的、可扩展的前端开发起点。它集成了当前社区最流行和推荐的工具链，并包含了常见功能的实现案例。

**👉 [在线访问示例 (Live Demo)](https://your-project-url.vercel.app)**
*(请将 `your-project-url.vercel.app` 替换为您自己的 Vercel 部署地址)*

## ✨ 主要特性 (Features)

- **⚡️ 极速构建工具**: 使用 [**Vite**](https://vitejs.dev/)，享受闪电般的冷启动和热更新（HMR）。
- **⚛️ 最新 React 实践**: 基于 [**React 18**](https://reactjs.org/)，使用函数式组件和 Hooks。
- **🔒 强类型支持**: 全面拥抱 [**TypeScript**](https://www.typescriptlang.org/)，保证代码健壮性和可维护性。
- **🗺️ 路由管理**: 集成 [**React Router v6**](https://reactrouter.com/)，包含动态路由、嵌套路由和懒加载示例。
- **📦 全局状态管理**: 选用轻量级状态管理库 [**Zustand**](https://github.com/pmndrs/zustand)，API 简洁，无需 Provider。
- **🔄 服务端状态管理**: 集成 [**TanStack Query v4 (React Query)**](https://tanstack.com/query/v4)，优雅地处理数据请求、缓存和同步。
- **📝 高效表单处理**: 使用 [**React Hook Form**](https://react-hook-form.com/) 处理复杂的表单逻辑和校验。
- **🎨 代码规范与格式化**: 内置 [**ESLint**](https://eslint.org/) 和 [**Prettier**](https://prettier.io/)，自动检查和格式化代码，保持团队风格统一。
- **✂️ 性能优化**: 通过 `React.lazy` 和 `Suspense` 实现基于路由的代码分割（懒加载）。
- **🌐 环境变量**: 区分开发环境 (`.env.development`) 和生产环境 (`.env.production`) 配置。
- **📁 清晰的目录结构**: 预设了标准化的项目目录，便于团队协作和项目扩展。
- **🚀 一键部署**: 完美支持 [**Vercel**](https://vercel.com/) 平台，实现 CI/CD 自动化部署。

## 🛠️ 技术栈 (Technology Stack)

- **框架**: React 18, Vite
- **语言**: TypeScript
- **路由**: React Router
- **状态管理**: Zustand
- **数据请求**: TanStack Query, Axios
- **表单**: React Hook Form
- **代码规范**: ESLint, Prettier

## 📁 项目结构 (Project Structure)

项目采用模块化的目录结构，方便维护和查找代码。

```
/
├── dist/                   # 构建输出目录
├── public/                 # 公共静态资源
├── src/
│   ├── api/                # API 请求函数和 Axios 实例
│   ├── assets/             # 图片、字体等本地资源
│   ├── components/         # 可复用的 UI 组件
│   ├── hooks/              # 自定义 Hooks
│   ├── pages/              # 页面级组件
│   ├── router/             # 路由配置
│   ├── store/              # 全局状态 (Zustand)
│   ├── styles/             # 全局样式文件
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 应用根组件 (布局)
│   ├── main.tsx            # 应用入口文件
│   └── vite-env.d.ts       # Vite 的 TypeScript 类型定义
├── .eslintrc.cjs           # ESLint 配置文件
├── .prettierrc.cjs         # Prettier 配置文件
├── package.json            # 项目依赖和脚本
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 就是你正在看的这个文件
```

## 🚀 快速开始 (Getting Started)

### 环境要求

- [Node.js](https://nodejs.org/) >= 18.0.0
- [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), or [npm](https://www.npmjs.com/)

### 安装与启动

1. **克隆项目到本地**

   ```bash
   git clone https://github.com/your-username/react-template.git
   ```

   *(请将 `your-username/react-template` 替换为你的仓库地址)*
2. **进入项目目录**

   ```bash
   cd react-template
   ```
3. **安装依赖**

   ```bash
   npm install
   ```
4. **启动开发服务器**

   ```bash
   npm run dev
   ```

   项目将在 `http://localhost:5173` (或其他可用端口) 启动。

## 📜 可用脚本 (Available Scripts)

在 `package.json` 中定义了以下常用脚本：

- `npm run dev`: 启动开发服务器。
- `npm run build`: 构建生产版本的应用到 `dist` 目录。
- `npm run lint`: 使用 ESLint 检查代码规范。
- `npm run format`: 使用 Prettier 格式化所有代码。
- `npm run preview`: 在本地预览生产构建后的应用。

## ☁️ 部署 (Deployment)

本项目已预先配置好，可直接部署到 [Vercel](https://vercel.com/)。

1. 将你的代码推送到 GitHub 仓库。
2. 在 Vercel 上，选择 "Import Project" 并选择你的 GitHub 仓库。
3. Vercel 会自动识别出这是一个 Vite 项目并配置好构建命令 (`npm run build`) 和输出目录 (`dist`)。
4. 点击 "Deploy"，完成！

之后，每当你向主分支 `push` 代码时，Vercel 都会自动为你构建和部署新版本。

## 📄 许可证 (License)

本项目采用 [MIT License](https://opensource.org/licenses/MIT) 授权。

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```css
/* src/index.css */
body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s,
    color 0.3s;
}

code {
  font-family:
    source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

/* src/index.css */
/* ...已有的 CSS Reset... */

/* 亮色模式变量 (默认) */
:root {
  --bg-color: #ffffff;
  --text-color: #212529;
  --border-color: #eee;
  --link-color: #007bff;
  --link-active-color: #d93025;
}

/* 暗色模式变量 */
[data-theme='dark'] {
  --bg-color: #212529;
  --text-color: #f8f9fa;
  --border-color: #495057;
  --link-color: #64b5f6;
  --link-active-color: #ff8a80;
}

```
