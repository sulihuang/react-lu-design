---
order: 0
title: Lu Design React
---

这里是 Lu Design 的 Ant Design 实现，开发和服务于企业级后台产品。

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## 特性

- Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
- [React Component](http://react-component.github.io/badgeboard/) 基础上精心封装的高质量 UI 组件。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。

## 安装

```bash
$ npm install antd
```

## 示例

```jsx
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

以下两种方法都可以达到按需加载的目的：

- `import DatePicker from 'antd/lib/date-picker'`
- 配合插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 使用 `import { DatePicker } from 'antd';`

> babel-plugin-import 支持 js 和 css 同时按需加载。

## 浏览器支持

现代浏览器和 IE9 及以上。
