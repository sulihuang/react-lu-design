---
order: 1
title: 脚手架
---

[dva](https://github.com/dvajs/dva) 是一个基于 react 和 redux 的轻量应用框架，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。

---

在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。

## 安装 dva

通过 npm 安装 dva 。

```bash
$ npm install dva-cli -g
```

## 创建新应用

安装完 dva-cli 之后，就可以在 terminal 里访问到 `dva` 命令。现在，你可以通过 `dva new` 创建新应用。

```bash
$ dva new dva-quickstart
```

这会创建 `dva-quickstart` 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。

然后我们 `cd` 进入 `dva-quickstart` 目录，并启动开发服务器：

```bash
$ cd dva-quickstart
$ npm start
```

几秒钟后，你会看到以下输出：

```bash
          proxy: load rule from proxy.config.js
          proxy: listened on 8989
📦  411/411 build modules
webpack: bundle build is now finished.
```

在浏览器里打开 http://localhost:8989 ，你会看到 dva 的欢迎界面。

## 使用 lu design

通过 npm 安装 `react-lu-design` 和 `babel-plugin-import` 。`babel-plugin-import` 是用来按需加载 lu design 的脚本和样式的，详见 [repo](https://github.com/ant-design/babel-plugin-import) 。

```bash
$ npm install react-lu-design babel-plugin-import --save
```

编辑 `webpack.config.js`，使 `babel-plugin-import` 插件生效。

```diff
+ webpackConfig.babel.plugins.push(['import', {
+   libraryName: 'react-lu-design',
+   style: 'css',
+ }]);
```

> 注：这里不需要手动重启开发服务器，保存 `webpack.config.js` 后会自动重启。


## 兼容性

React Lu Design 支持所有的现代浏览器。


```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
  <head>
  <meta charset="UTF-8">
  <meta name="renderer" content="webkit">
  <meta name="browsermode" content="application">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="robots" content="noindex">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="dns-prefetch" href="//as.alipayobjects.com" />
  <link rel="dns-prefetch" href="//at.alicdn.com" />
  <link rel="dns-prefetch" href="//static.zhulux.net" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="/index.css">
    <!-- Polyfills -->
    <!--[if lte IE 11]>
    <script src="https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js></script>
    <![endif]-->
  </head>
  <body>
  </body>
  <!-- 引入公用文件 -->
  <script src="/common.js"></script>
  <!-- 引入入口文件 -->
  <script src="/index.js"></script>
</html>
```
## 按需加载

通过 `import { Button } from 'react-lu-design';` 引入会加载 react-lu-design 下所有的模块，如果要按需加载可以通过以下的写法来引用。

```jsx
import Button from 'react-lu-design/lib/button';
```

如果你使用 babel，我们推荐使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```jsx
import { Button } from 'react-lu-design';
```

插件会帮你转换成上面的写法。另外此插件配合 [style](https://github.com/ant-design/babel-plugin-import#usage) 属性可以做到模块样式的按需自动加载。

## 小甜点

- 你可以享用 `npm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
