---
order: 4
title:
  zh-CN: 基础栅格
  en-US: Basic Grid
---

## zh-CN

通过设置 flex 为 false 可以启用传统的 float 布局。

````jsx
import { Row, Col } from 'react-lu-design';

ReactDOM.render(
  <div>
    <Row flex={false}>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
        <Row flex={false}>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row>
  </div>,
  mountNode
);
````
