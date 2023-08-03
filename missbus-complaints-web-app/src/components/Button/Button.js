import React from 'react'
import styles from './Button.module.css'

const Button = ({
    children,
    onClick,
    style,
    classes=[],
    withBorder=false,
    disabled=false
}) => {
    return (
        <div
            onClick={onClick} 
            className={[
                styles.button, 
                withBorder ? null : styles.withoutBorder, 
                disabled ? styles.disabled : null,
                ...classes
            ].join(' ')}
            style={style}>
            {children}
        </div>
    )
}

export default Button