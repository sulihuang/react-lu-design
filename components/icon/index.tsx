import * as React from 'react';
import classNames from 'classnames';
import omit from 'omit.js';

export interface IconProps {
  type: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<any>;
  spin?: boolean;
  style?: React.CSSProperties;
}

export default (props: IconProps) => {
  const { type, className = '', spin } = props;
  const classString = classNames({
    'lud-icon': true,
    'lud-icon-spin': !!spin || type === 'loading',
    [`lud-icon-${type}`]: true,
    [className]: true,
  });
  return <i {...omit(props, ['type', 'spin'])} className={classString} />;
};
