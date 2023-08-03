import React, { ReactNode, CSSProperties, UIEventHandler } from 'react';
import styles from './Button.module.css'


interface ButtonProps {
    children?: ReactNode;
    style?: CSSProperties;
    classes?: string[];
    onClick?: UIEventHandler<HTMLDivElement>;
    withBorder?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
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