import React from 'react';
import ReactDOM from 'react-dom';
import Animate from 'rc-animate';
import Icon from '../icon';
import classNames from 'classnames';

function noop() {}

export interface AlertProps {
  /**
   * Type of Alert styles, options:`success`, `info`, `warning`, `error`
   */
  type?: 'success' | 'info' | 'warning' | 'error';
  /** Whether Alert can be closed */
  closable?: boolean;
  /** Close text to show */
  closeText?: React.ReactNode;
  /** Content of Alert */
  message: React.ReactNode;
  /** Additional content of Alert */
  description?: React.ReactNode;
  /** Callback when close Alert */
  onClose?: React.MouseEventHandler<any>;
  /** Whether to show icon */
  showIcon?: boolean;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  banner?: boolean;
}

export default class Alert extends React.Component<AlertProps, any> {
  static defaultProps = {
    type: 'info',
  };
  constructor(props) {
    super(props);
    this.state = {
      closing: true,
      closed: false,
    };
  }
  handleClose = (e) => {
    e.preventDefault();
    let dom = ReactDOM.findDOMNode(this) as HTMLElement;
    dom.style.height = `${dom.offsetHeight}px`;
    // Magic code
    // 重复一次后才能正确设置 height
    dom.style.height = `${dom.offsetHeight}px`;

    this.setState({
      closing: false,
    });
    (this.props.onClose || noop)(e);
  }
  animationEnd = () => {
    this.setState({
      closed: true,
      closing: true,
    });
  }
  render() {
    let {
      closable, description, type, prefixCls = 'lud-alert', message, closeText, showIcon, banner,
      className = '', style,
    } = this.props;

    // banner模式默认有 Icon
    showIcon = showIcon || banner;
    // banner模式默认为警告
    type = banner ? 'warning' : type;

    let iconType = '';
    switch (type) {
      case 'success':
        iconType = 'checkcircle';
        break;
      case 'info':
        iconType = 'infocirlce';
        break;
      case 'error':
        iconType = 'closecircle';
        break;
      case 'warning':
        iconType = 'exclamationcircle';
        break;
      default:
        iconType = 'default';
    }

    // use outline icon in alert with description
    if (!!description) {
      iconType += 'o';
    }

    let alertCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${type}`]: true,
      [`${prefixCls}-close`]: !this.state.closing,
      [`${prefixCls}-with-description`]: !!description,
      [`${prefixCls}-no-icon`]: !showIcon,
      [`${prefixCls}-banner`]: !!banner,
      [className]: !!className,
    });

    // closeable when closeText is assigned
    if (closeText) {
      closable = true;
    }

    return this.state.closed ? null : (
      <Animate
        component=""
        showProp="data-show"
        transitionName={`${prefixCls}-slide-up`}
        onEnd={this.animationEnd}
      >
        <div data-show={this.state.closing} className={alertCls} style={style}>
          {showIcon ? <Icon className={`${prefixCls}-icon`} type={iconType} /> : null}
          <span className={`${prefixCls}-message`}>{message}</span>
          <span className={`${prefixCls}-description`}>{description}</span>
          {closable ? <a onClick={this.handleClose} className={`${prefixCls}-close-icon`}>
            {closeText || <Icon type="cross" />}
          </a> : null}
        </div>
      </Animate>
    );
  }
}
