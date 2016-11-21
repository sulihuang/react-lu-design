import React from 'react';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';

export interface RowProps {
  className?: string;
  gutter?: number;
  flex?: boolean;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  style?: React.CSSProperties;
  prefixCls?: string;
}

export default class Row extends React.Component<RowProps, any> {
  static defaultProps = {
    gutter: 0,
    prefixCls: 'lud-row',
    flex: true
  };
  static propTypes = {
    flex: React.PropTypes.bool,
    align: React.PropTypes.string,
    justify: React.PropTypes.string,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    gutter: React.PropTypes.number,
    prefixCls: React.PropTypes.string,
  };
  render() {
    const [{ flex, justify, align, className, gutter, style, children, prefixCls }, others] = splitObject(this.props,
      ['flex', 'justify', 'align', 'className', 'gutter', 'style', 'children', 'prefixCls']);
    const classes = classNames({
      [prefixCls]: !flex,
      [`${prefixCls}-flex`]: flex,
      [`${prefixCls}-flex-${justify}`]: justify,
      [`${prefixCls}-flex-${align}`]: align,
      [className]: className,
    });
    const rowStyle = gutter > 0 ? assign({}, {
      marginLeft: gutter / -2,
      marginRight: gutter / -2,
    }, style) : style;
    const cols = Children.map(children, (col: React.ReactElement<any>) => {
      if (!col) {
        return null;
      }
      if (col.props) {
        return cloneElement(col, {
          style: gutter > 0 ? assign({}, {
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2,
          }, col.props.style) : col.props.style,
        });
      }
      return col;
    });
    return <div {...others} className={classes} style={rowStyle}>{cols}</div>;
  }
}
