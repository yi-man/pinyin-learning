# Agents

## 开发规范

所有项目计划必须包含详细的测试用例设计，测试用例分为以下两部分：

### 单元测试

- 覆盖主要功能点
- 覆盖边界条件
- 覆盖异常场景

### 集成测试

- 验证模块间交互
- 验证系统整体流程
- 验证端到端功能

**开发完成标准**：开发阶段结束前，必须完成全部测试用例的执行与验证，确保代码质量达标后，方可标记为"开发完成"状态。

**内容语言规范**：整个项目的所有文档、注释、用户界面及交互内容均需使用中文。

### 分支管理

- 开发新功能时，必须从主分支切出新的功能分支
- 分支命名规范：`feature/功能名称`、`fix/问题描述`
- 功能开发完成后，使用 `gh` 工具自动完成 Commit 和 Pull Request

### Git 操作流程

1. 从主分支创建新分支：`git checkout -b feature/xxx`
2. 完成功能开发后，使用 `gh` 提交 Commit：`gh commit`
3. 推送到远程并创建 Pull Request：`gh pr create`
4. 要持续查看pr的ci是否正常，不正常查看错误自动修复
5. 等待代码审查通过后合并

## 技术栈

### 包管理

- **包管理器**: pnpm

### 框架

- **全栈框架**: Next.js
- **样式方案**: CSS Modules / Tailwind CSS
- **数据库**: JSON文件存储
- **认证方式**: JWT

### 部署

- **方式**: 静态托管 (Vercel / Netlify)

## Available Agents

### search

Research and explore the codebase to understand architecture, find relevant code patterns, and gather information.

**When to use:**

- Understanding project structure
- Finding specific implementations
- Exploring code relationships

### quality-assurance

Comprehensive testing including unit tests, integration tests, end-to-end scenarios, and performance validation.

**When to use:**

- After feature development
- Regression testing
- Pre-deployment validation

\=======

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

> > > > > > > ea953d3 (Initial commit from Create Next App)

