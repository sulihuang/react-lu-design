---
category: Components
subtitle: 图标
type: General
title: Icon
toc: false
---

语义化的矢量图形。

## 如何使用

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<Icon type="link" />
```

最终会渲染为：

```html
<i class="lud-icon lud-icon-${type}"></i>
```

## 本地部署

图标组件使用 [iconfont.cn](http://www.iconfont.cn/plus/manage/index?manage_type=myprojects&projectId=186797)，默认公网可访问。

## 图标列表

> 点击图标复制代码。


```__react
import IconSet from 'site/theme/template/IconSet';
ReactDOM.render(<IconSet className="icons" catigory="default" />, mountNode);
```

## Props

| 参数      | 说明             | 类型      | 默认值  |
|----------|------------------|----------|--------|
| type | 图标类型 | string | - |
| spin | 是否有旋转动画 | boolean | false |

<style>
.markdown .icons {
  width: 100%;
}
ul.lud-icons-list {
  margin: 40px 0;
  list-style: none;
  overflow: hidden;
}
ul.lud-icons-list li {
  float: left;
  width: 16.66%;
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 100px;
  color: #555;
  transition: all 0.2s ease;
  position: relative;
  margin: 3px 0;
  border-radius: 4px;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 0 0 0;
}
ul.lud-icons-list li:hover {
  background-color: #eaf8fe;
}
ul.lud-icons-list li.copied:hover {
  color: rgba(255,255,255,0.2);
}
ul.lud-icons-list li:after {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "Copied!";
  text-align: center;
  line-height: 110px;
  color: #2db7f5;
  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  opacity: 0;
}
ul.lud-icons-list li.copied:after {
  opacity: 1;
  top: -10px;
}
.lud-icon {
  font-size: 24px;
  margin: 12px 0 16px;
  transition: all .3s;
}
ul.lud-icons-list li:hover .lud-icon {
  transform: scale(1.4);
}
.lud-icon-class {
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: Consolas;
  white-space: nowrap;
}
</style>
