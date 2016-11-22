---
order: 2
title:
  zh-CN: 带 icon 的滑块
  en-US: Slider with icon
---

## zh-CN

滑块左右可以设置图标来表达业务含义。

## en-US

You can add an icon beside the slider to make it meaningful.

````jsx
import { Slider, Icon } from 'react-lu-design';

const IconSlider = React.createClass({
  getInitialState() {
    const max = this.props.max;
    const min = this.props.min;
    const mid = ((max - min) / 2).toFixed(5);
    return {
      preIconClass: this.props.value >= mid ? '' : 'lud-icon-highlight',
      nextIconClass: this.props.value >= mid ? 'lud-icon-highlight' : '',
      mid,
      sliderValue: this.props.value,
    };
  },

  handleChange(v) {
    this.setState({
      preIconClass: v >= this.state.mid ? '' : 'lud-icon-highlight',
      nextIconClass: v >= this.state.mid ? 'lud-icon-highlight' : '',
      sliderValue: v,
    });
  },

  render() {
    return (
      <div className="iconWrapper">
        <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
        <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
        <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
      </div>
    );
  },
});

ReactDOM.render(
  <IconSlider min={0} max={20} value={0} icon={['frown-o', 'smile-o']} />
, mountNode);
````

````css
.iconWrapper {
  position: relative;
  padding: 0px 30px;
}

.iconWrapper .lud-icon {
  position: absolute;
  top: -3px;
  width: 16px;
  height: 16px;
  line-height: 1;
  font-size: 16px;
  color: #ccc;
}

.iconWrapper .lud-icon:first-child {
  left: 0;
}

.iconWrapper .lud-icon:last-child {
  right: 0;
}

.lud-icon.lud-icon-highlight {
  color: #666;
}
````
