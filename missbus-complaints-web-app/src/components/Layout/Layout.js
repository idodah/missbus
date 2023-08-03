import React from 'react'
import styles from './Layout.module.css'

const Layout = ({
    children,
    padding = [0],
    margin = [0],
    alignItems = 'center',
    justifyContent = 'center',
    fullWidth = false,
    gap=null,
    border = false,
    classes = [],
    color,
    style = {},
    onClick,
    hoverEffect,
}) => {
    const containerStyle = {
        'alignItems': alignItems,
        'justifyContent': justifyContent,
        'gap': gap ? `${gap}px` : null,
        'padding': padding.map(p => p + 'px').join(' '),
        'margin': margin.map(p => p + 'px').join(' '),
        ...style,
    }
    if (color) containerStyle.background = color
    return (
        <div
            onClick={onClick}
            className={[
                styles.base,
                fullWidth ? styles.fullWidth : null,
                hoverEffect ? styles.hoverEffect : null,
                border ? styles.border : null,
                onClick !== undefined ? styles.clickable : null,
                ...classes
            ].join(' ')}
            style={containerStyle}>
            {children}
        </div>
    )
}

export default Layout
