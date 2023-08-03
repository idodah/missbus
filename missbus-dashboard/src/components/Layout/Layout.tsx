import React, { ReactNode, CSSProperties, RefObject, UIEventHandler } from 'react';
import styles from './Layout.module.css'

export interface LayoutProps {
    children?: ReactNode;
    padding?: number[];
    margin?: number[];
    gap?: number;
    alignItems?: string;
    justifyContent?: string;
    fullWidth?: boolean;
    fullHeight?: boolean;
    row?: boolean;
    fitParent?: boolean;
    hide?: boolean;
    color?: string;
    style?: CSSProperties;
    className?: string;
    onClick?: UIEventHandler<HTMLDivElement>;
    onScroll?: UIEventHandler<HTMLDivElement>;
    width?: number;
    height?: number;
    layoutRef?: RefObject<HTMLDivElement>;
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    padding,
    margin,
    gap = 0,
    alignItems = 'center',
    justifyContent = 'center',
    fullWidth = false,
    fullHeight = false,
    fitParent = false,
    row = false,
    hide = false,
    color,
    style = {},
    className,
    onClick,
    onScroll,
    width,
    height,
    layoutRef
}) => {
    const containerStyle = {
        'alignItems': alignItems,
        'justifyContent': justifyContent,
        'padding': padding ? padding.map(p => isNaN(p) ? p : p + 'px').join(' ') : '0px',
        'margin': margin ? margin.map(p => isNaN(p) ? p : p + 'px').join(' ') : '0px',
        'gap': gap ? gap + 'px' : '0px',
        ...style,
    }
    if (color) containerStyle.background = color
    if (width) containerStyle.width = width + 'px'
    if (height) containerStyle.height = height + 'px'
    if (hide) return null
    return (
        <div
            ref={layoutRef}
            onScroll={onScroll}
            onClick={onClick}
            className={[
                styles.base,
                fullWidth ? styles.fullWidth : null,
                fullHeight ? styles.fullHeight : null,
                row ? styles.row : null,
                fitParent ? styles.fitParent : null,
                onClick ? styles.clickable : null,
                className
            ].join(' ')}
            style={containerStyle}>
            {children}
        </div>
    )
}