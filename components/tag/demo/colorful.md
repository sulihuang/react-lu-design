---
order: 1
title:
  zh-CN: 可选样式
  en-US: Colorful
---

## zh-CN

基本标签可以通过 `type` 设置背景，以提供视觉暗示区分不同目的的标签。

## en-US

We can set the background color of basic Tag by `color`, and it's helpful to tell different Tags.

````jsx
import { Tag } from 'react-lu-design';

ReactDOM.render(
  <div>
    <Tag type="primary">Primary</Tag>
    <Tag type="info">Info</Tag>
    <Tag type="success">Success</Tag>
    <Tag type="danger">Danger</Tag>
    <Tag type="warning">Warning</Tag>
  </div>,
  mountNode
);
````
