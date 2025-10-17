# IT365 工具箱

一个为开发者提供各类实用在线工具的平台,使用 React + TypeScript + Vite + Tailwind CSS 构建。

## 📋 项目概述

IT365 工具箱致力于提供简单、高效、易用的在线开发工具,帮助开发者提升工作效率。

### 特性

- ✅ 完整的国际化支持(中文/英文)
- ✅ 响应式设计,支持移动端
- ✅ TypeScript 类型安全
- ✅ Tailwind CSS 样式系统
- ✅ 模块化工具架构
- 🚧 持续添加新工具...

## 🚀 快速开始

### 前置要求

- Node.js >= 18
- pnpm >= 8

### 安装

\`\`\`bash
# 克隆项目
git clone <repository-url>

# 进入项目目录
cd it365工具箱/Project

# 安装依赖
pnpm install
\`\`\`

### 开发

\`\`\`bash
# 启动开发服务器
pnpm dev

# 访问 http://localhost:5173
\`\`\`

### 构建

\`\`\`bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
\`\`\`

## 📁 项目结构

\`\`\`
Project/
├── src/
│   ├── components/      # 组件
│   │   ├── layout/      # 布局组件
│   │   ├── common/      # 公共组件
│   │   └── tools/       # 工具组件
│   ├── pages/           # 页面
│   ├── hooks/           # 自定义Hooks
│   ├── i18n/            # 国际化配置
│   ├── utils/           # 工具函数
│   ├── types/           # 类型定义
│   ├── store/           # 状态管理
│   ├── config/          # 配置文件
│   └── tools/           # 工具实现
│       ├── text/        # 文本工具
│       ├── dev/         # 开发工具
│       ├── image/       # 图片工具
│       └── other/       # 其他工具
├── public/              # 静态资源
└── ...配置文件
\`\`\`

## 🛠️ 技术栈

- **框架**: React 18.3
- **语言**: TypeScript 5.6
- **构建工具**: Vite 5.4
- **路由**: React Router Dom 7.9
- **样式**: Tailwind CSS 4.1
- **图标**: Lucide React
- **国际化**: i18next + react-i18next
- **状态管理**: Zustand 5.0
- **代码规范**: ESLint + Prettier

## 📝 开发命令

\`\`\`bash
# 开发
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview      # 预览生产构建

# 代码质量
pnpm lint         # 运行ESLint检查
pnpm lint:fix     # 自动修复ESLint问题
pnpm format       # 格式化代码
\`\`\`

## 📦 工具分类

### 文本工具
- JSON 格式化器 (开发中)
- Base64 编码/解码 (开发中)
- URL 编码/解码 (开发中)
- Markdown 编辑器 (规划中)
- 文本差异对比 (规划中)

### 开发工具
- UUID 生成器 (开发中)
- 时间戳转换器 (开发中)
- MD5/SHA 哈希计算 (开发中)
- 正则表达式测试器 (规划中)
- 颜色选择器 (规划中)

### 图片工具
- 二维码生成器 (开发中)

### 其他工具
- 密码生成器 (规划中)

## 🗺️ 开发路线图

### 阶段一:基础框架 ✅ (进行中)
- [x] 项目环境搭建
- [x] 国际化系统
- [x] 布局与路由
- [ ] 工具系统框架

### 阶段二:核心功能 🚧
- [ ] 基础工具开发
- [ ] 公共组件库
- [ ] 工具扩展

### 阶段三:优化完善 📅
- [ ] SEO优化
- [ ] 性能优化
- [ ] 移动端适配
- [ ] PWA支持

### 阶段四:测试上线 📅
- [ ] 全面测试
- [ ] 部署上线
- [ ] 监控配置

## 🤝 贡献指南

欢迎贡献新工具或改进现有功能！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingTool`)
3. 提交更改 (`git commit -m 'Add some AmazingTool'`)
4. 推送到分支 (`git push origin feature/AmazingTool`)
5. 开启 Pull Request

## 📄 许可证

[MIT License](LICENSE)

## 📧 联系方式

- 项目主页: [待添加]
- 问题反馈: [GitHub Issues]

---

**当前版本**: v0.1.0 (Alpha)
**最后更新**: 2025-10-17
