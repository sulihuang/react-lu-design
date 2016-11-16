---
order: 0
title: 简介
---

这里是 Lu Design 的 React 实现，开发和服务于企业级后台产品。

---

## 特性

- Designed as Lu Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
- [React Component](http://react-component.github.io/badgeboard/) 基础上精心封装的高质量 UI 组件。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。

## 安装

```bash
# [WIP] npm install react-lu-design
$ npm install git+git@github.com:zhulux/react-lu-design.git --save
```

## 示例

```jsx
import { DatePicker } from 'react-lu-design';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/antd.css';  // or 'react-lu-design/dist/react-lu-design.less'
```

以下两种方法都可以达到按需加载的目的：

- `import DatePicker from 'react-lu-design/lib/date-picker'`
- 配合插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 使用 `import { DatePicker } from 'antd';`

> babel-plugin-import 支持 js 和 css 同时按需加载。

## 浏览器支持

现代浏览器和 IE9 及以上。
