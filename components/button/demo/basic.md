---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN


通过设置 `type` 为 `primary` `ghost` `dashed` `success` `danger` 可分别创建主按钮、幽灵按钮、虚线按钮、成功操作按钮、危险操作按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

````jsx
import { Button } from 'antd';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
  </div>,
  mountNode,
);
````
