# 拼音学习 MVP 任务分解

## 开发任务

### Task 1: 创建拼音数据文件

**目标**: 定义完整的声母、韵母数据及类型

- [ ] SubTask 1.1: 创建 `src/data/pinyin.ts` 文件
  - 定义声母数据 (23个): b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s, y, w
  - 定义单韵母数据 (7个): a, o, e, i, u, ü, ê
  - 定义复韵母数据 (9个): ai, ei, ui, ao, ou, iu, ie, üe, er
  - 定义鼻韵母数据 (9个): an, en, in, un, ün, ang, eng, ing, ong
  - 导出 TypeScript 类型和接口

### Task 2: 实现拼音发音 Hook

**目标**: 创建处理 Web Speech API 的自定义 Hook

- [ ] SubTask 2.1: 创建 `src/hooks/usePinyinAudio.ts`
  - 实现 `usePinyinAudio` Hook
  - 处理 SpeechSynthesis API 调用
  - 提供 `speak(pinyin: string)` 方法
  - 提供 `isPlaying` 状态
  - 处理浏览器兼容性检测

### Task 3: 实现拼音卡片组件

**目标**: 创建单个拼音卡片的 UI 组件

- [ ] SubTask 3.1: 创建 `src/components/pinyin/PinyinCard.tsx`
  - 接收 `pinyin` 字符串和 `onClick` 回调作为 props
  - 显示拼音字母
  - 实现悬停效果 (上浮 + 阴影)
  - 实现点击效果 (缩放动画)
  - 实现播放中动画 (波纹扩散)
  - 支持 `isPlaying` 状态显示

### Task 4: 实现拼音分类区块组件

**目标**: 创建展示拼音分类区块的组件

- [ ] SubTask 4.1: 创建 `src/components/pinyin/PinyinSection.tsx`
  - 接收 `title` (分类标题) 和 `pinyins` (拼音数组) 作为 props
  - 渲染分类标题
  - 使用网格布局展示拼音卡片
  - 支持 `playingPinyin` 状态传递给子组件

### Task 5: 实现拼音列表主组件

**目标**: 创建包含所有拼音分类的列表组件

- [ ] SubTask 5.1: 创建 `src/components/pinyin/PinyinList.tsx`
  - 整合所有拼音数据
  - 按声母、韵母分类渲染 PinyinSection
  - 使用 usePinyinAudio hook 管理发音
  - 处理播放状态

### Task 6: 实现首页拼音列表页面

**目标**: 将首页替换为拼音学习列表

- [ ] SubTask 6.1: 修改 `src/app/page.tsx`
  - 导入并使用 PinyinList 组件
  - 添加页面标题和引导文字
  - 处理浏览器不支持 Speech API 的情况

### Task 7: 更新应用布局和样式

**目标**: 更新全局样式和元数据

- [ ] SubTask 7.1: 更新 `src/app/layout.tsx`
  - 修改 metadata (标题: "拼音学习", 描述: "汉语拼音学习工具")
  - 修改 html lang 属性为 "zh-CN"

- [ ] SubTask 7.2: 更新 `src/app/globals.css`
  - 添加「教科书美学」配色变量
  - 添加基础字体和背景样式
  - 添加波纹动画关键帧

### Task 8: 编写集成测试

**目标**: 使用 Playwright 编写端到端测试

- [ ] SubTask 8.1: 编写测试用例验证拼音列表显示
  - 测试页面加载成功
  - 测试声母卡片数量正确 (23个)
  - 测试韵母卡片数量正确
  - 测试页面标题显示

- [ ] SubTask 8.2: 编写测试用例验证点读功能
  - 测试点击拼音卡片
  - 测试浏览器兼容性提示 (可选)

## 任务依赖关系

```
Task 1 (拼音数据)
    ↓
Task 2 (Hook) ──┐
                 ├──→ Task 5 (PinyinList)
Task 3 (Card) ──┘
    ↓
Task 4 (Section)
    ↓
Task 6 (首页)
    ↓
Task 7 (样式)
    ↓
Task 8 (测试)
```

## 开发顺序

1. Task 1 - 创建拼音数据 (基础依赖)
2. Task 2 - 实现发音 Hook
3. Task 3 - 实现卡片组件
4. Task 4 - 实现分类区块组件
5. Task 5 - 实现拼音列表主组件
6. Task 6 - 实现首页
7. Task 7 - 更新样式
8. Task 8 - 编写测试
