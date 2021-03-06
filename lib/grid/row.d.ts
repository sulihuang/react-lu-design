/// <reference types="react" />
import React from 'react';
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
    static defaultProps: {
        gutter: number;
        prefixCls: string;
        flex: boolean;
    };
    static propTypes: {
        flex: React.Requireable<any>;
        align: React.Requireable<any>;
        justify: React.Requireable<any>;
        className: React.Requireable<any>;
        children: React.Requireable<any>;
        gutter: React.Requireable<any>;
        prefixCls: React.Requireable<any>;
    };
    render(): JSX.Element;
}
