---
order: 3
title:
  zh-CN: 色彩
  en-US: Colors
---

## 有意义的色彩

配色与代码风格的共同点，在于遵循一致性。色彩是相当感性的东西，设计中对色彩的运用首要应考虑到品牌层面的表达，另外很重要的一点是色彩的运用应达到信息传递，动作指引，交互反馈，或是强化和凸现某一个元素的目的。任何颜色的选取和使用应该是有意义的。

## Lu Design Colors

Lu Design 的色板由 6 种基本色彩组成，在此基础上还可以通过黑白叠加的方式实现色彩明暗的效果。

`````__react
const Palette = React.createClass({
  render() {
    const color = this.props.color;
    return <div className="color-palette">
      <div className="main-color">
        {color.colors.map(function(color) {
          return (<div key={color} style={{backgroundColor:color}}></div>);
        })}
      </div>
      <div className={"color-msg"}>
        <p className={"color-msg-title"}>{color.title}</p>
        <p className={"color-msg-description"}>{color.description}</p>
      </div>
    </div>;
  }
});
const ExtendPalettes = React.createClass({
  render() {
    const colors = [
      {
        'title': 'Primary Color',
        'description': '遵循色相、明度、饱和度的统一，就像你不会混着用驼峰和匈牙利命名变量。',
        'colors': [
          "#1589EE", "#54698D", "#4BCA81",
          "#FFB75D", "#D4504C", "#061C3F"
        ]
      },
      {
        'title': 'Grey Black #061C3F',
        'description': '灰色是中性化的颜色，通常传递出来的感觉是沉稳，在配色心理学中描述 “专业化、系统化”的词条中灰色的使用占了较高的比例。建议可用于字体颜色的选择以及界面中大面积背景的底色搭配。',
        'colors': [
          "#E6E8EC", "#C1C6CF", "#9BA4B2",
          "#768295", "#516079", "#2B3E5C",
          "#061C3F", "#051836", "#000000"
        ]
      },
      {
              'title': 'Blue #1589EE',
              'description': '逐鹿蓝是Lu Design的品牌用色，深蓝色的运用可以传递出可靠和稳定的情绪，而浅蓝色系则更为友好和清新，同时还代表了科技感与想象力。在很多专业类、管理类的后台系统设计中蓝色系常常会被选择作为设计的主色来使用。',
              'colors': [
                "#A1D0F8", "#7EBEF6", "#5BACF3",
                "#389BF1", "#1589EE", "#1274CA",
                "#0F60A7", "#0C4B83", "#08375F"
              ]
      },
      {
        'title': 'Red #D4504C',
        'description': '红色是具有强烈情感因素的颜色，通常红色传递的心理暗示有激情、欲望、战争以及危险。考虑到红色的特性，在后台系统的设计中建议作为辅助色来突出元素特性或是强化信息，常见的有图表元素，状态，危险信号，错误提示等。',
        'colors': [
          "#EEB9B7", "#E79F9D", "#E18582",
          "#DA6A67", "#D4504C", "#B44441",
          "#943835", "#752C2A", "#55201E"
        ]
      },
      {
        'title': 'Green #4BCA81',
        'description': '绿色是非常务实的颜色，它吸收了蓝色的沉稳同时具备黄色的活力。绿色蕴含着和平、生命、希望、轻松、富饶的含义。在我们的设计实例中绿色可用来传达任务完成、健康状态以及安全感等状态。',
        'colors': [
          "#B7EACD", "#9CE2BA", "#81DAA7",
          "#66D294", "#4BCA81", "#40AC6E",
          "#358D5A", "#296F47", "#1E5134"
        ]
      },
      {
        'title': 'Orange #FFB75D',
        'description': '介于红色和黄色之间，传达愉悦，创造力，热情，吸引力。但橙色又不如红色那样具侵略性，同时又能够很好的引起视觉的注意力。可以作为设计的主色也可以用于辅助色。但大面积使用时需要慎重。',
        'colors': [
          "#FFE2BE", "#FFD7A6", "#FFCD8E",
          "#FFC275", "#FFB75D", "#D99C4F",
          "#B38041", "#8C6533", "#664925"
        ]
      }
    ];
    return <div>
      {colors.map((color, i) => {
        return <Palette key={i} color={color} />;
      })}
    </div>;
  }
});
ReactDOM.render(<ExtendPalettes key="palettes" />, mountNode);
`````

## 色彩和交互

设计元素本身由于交互行为会引发一系列细微的视觉变化，而元素本身的颜色变化有时也能很好的实现这一目的。在进行这类设计的同时，建议采取在颜色上添加黑色或者白色并按照 `n+10%` 的规律递增的方式来实现。以下图为例，当鼠标 hover 某个特定元素，就视为浮起，对应颜色就相应增加白色叠加，相反点击的行为可以理解为按下去，在颜色上就相应的增加黑色的叠加。

<img src="https://t.alipayobjects.com/images/T1ZHxhXdNmXXXXXXXX.png" width="100%">

<img src="https://t.alipayobjects.com/images/T1fZJhXahgXXXXXXXX.png" width="100%">

## 色彩识别

合适的色彩对比为信息传达加分，同时也应放考虑到有颜色识别障碍人群的需求。我们将每种主色衍生出来的颜色进行了打标，在考虑对比颜色的选择时建议两种颜色对应标签数值的差要大于等于 5。

<img src="https://t.alipayobjects.com/images/rmsweb/T1hLphXgXcXXXXXXXX.png" width="100%">

<img src="https://t.alipayobjects.com/images/rmsweb/T1v2phXj8bXXXXXXXX.png" width="100%">

## 色彩换算工具

> 正数为变淡 `tint` ，负数为加深 `shade`。

`````__react
const Values = require('values.js');
const CopyToClipboard = require('react-copy-to-clipboard');
const classNames = require('classnames');
const lud = require('react-lu-design');
const Button = lud.Button;
const InputNumber = lud.InputNumber;
const Slider = lud.Slider;
const Tooltip = lud.Tooltip;
const TintShadeTool = React.createClass({
  getInitialState() {
    return {
      result: '#2db7f5',
      color: '#2db7f5',
      justCopied: false,
      darkBackground: false,
      value: 80
    };
  },
  handleChangeColor(e) {
    this.setState({
      color: e.target.value
    }, this.calculate);
  },
  handleChangeValue(value) {
    this.setState({
      value: value
    }, this.calculate);
  },
  componentDidMount() {
    this.calculate();
  },
  calculate() {
    if (this.state.value === 0) {
      this.setState({
        result: this.state.color
      });
      return;
    }
    const tintOrShade = this.state.value > 0 ? 'tint' : 'shade';
    const c = new Values(this.state.color);
    const resultColor = c[tintOrShade](Math.abs(this.state.value));
    this.setState({
      result: '#' + resultColor.hex,
      darkBackground: resultColor.getBrightness() < 50
    });
  },
  copySuccess(e) {
    this.setState({ justCopied: true }, () => {
      setTimeout(() => {
        this.setState({ justCopied: false });
      }, 1000);
    });
  },
  render() {
    const marks = {
      '-100': '加黑',
      '0': '原色',
      '100': '加白'
    };
    const className = classNames({
      'color-block': true,
      copied: this.state.justCopied,
      dark: this.state.darkBackground,
    });
    return <div style={{margin: '40px 0'}}>
      <div>
        <Tooltip title="点击色块复制色值">
          <CopyToClipboard
            className={className}
            onCopy={this.copySuccess}
            text={this.state.result}
          >
            <div style={{backgroundColor: this.state.result}} />
          </CopyToClipboard>
        </Tooltip>
        <span style={{width: 188, display: 'inline-block', fontFamily: 'Consolas'}}>{this.state.result}</span>
        <input className="lud-input" style={{width: 80, color: this.state.color, marginRight: 8}} value={this.state.color} onChange={this.handleChangeColor} />
        <InputNumber style={{width: 70}} value={this.state.value} onChange={this.handleChangeValue} min={-100} max={100} step={5} />
        <span style={{margin: '0 0 0 8px'}}>%</span>
      </div>
      <div style={{width: 420, margin: '40px 10px 60px'}}>
        <Slider value={this.state.value} onChange={this.handleChangeValue} min={-100} max={100} step={5} marks={marks} />
      </div>
    </div>;
  }
});

ReactDOM.render(<TintShadeTool key="tintShadeTool" />, mountNode);
`````

Lu Design 专用色彩换算工具，用于解析类似 `#2db7f5 tint 80%` 的色彩标注。

less 或 scss 语言可以直接使用 `tint(#2db7f5, 80%)` 和  `shade(#2db7f5, 80%)` 的语法。
