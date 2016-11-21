---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

> Danger 按钮仅用于表述不可逆的高危操作，请勿滥用。

通过设置 `type` 为 `primary` `second` `ghost` `dashed` `grey` `danger` 可分别创建主按钮、幽灵按钮、虚线按钮、成功操作按钮、危险操作按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

````jsx
import { Button } from 'react-lu-design';

ReactDOM.render(
  <div>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button>Default</Button>
    <Button type="second">Second</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="white">White</Button>

  </div>,
  mountNode,
);
````
