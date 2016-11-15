
# React Lu Design

逐鹿X中后台产品设计语言LuDesign及其React 实现，基于Ant Design。

## 安装

```bash
npm install git+ssh://git@github.com/zhulux/react-lu-design.git
```

## 示例

```jsx
import { DatePicker } from 'react-lu-design';
ReactDOM.render(<DatePicker />, mountNode);
```

按需加载可通过此写法 `import DatePicker from 'react-lu-design/lib/date-picker'` 或使用插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)。


## 浏览器支持

现代浏览器和 IE9 及以上。

## TypeScript

tsconfig.json

```
{
  "compilerOptions": {
    "moduleResolution": "node",
    "jsx": "preserve",
    "allowSyntheticDefaultImports": true
  }
}
```
