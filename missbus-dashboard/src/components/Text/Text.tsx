import React, { CSSProperties, UIEventHandler } from 'react';
import styles from './Text.module.css'

interface TextProps {
    size?: number;
    bold?: boolean;
    color?: string;
    text?: string;
    center?: boolean;
    type?: string;
    onClick?: UIEventHandler<HTMLDivElement>;
    additionalStyle?: CSSProperties;
}


const Text: React.FC<TextProps> = ({
        size,
        bold=false,
        color = "black",
        text = '',
        center = false,
        type = 'normal',
        onClick,
        additionalStyle={}
    }) => {
    let style = styles.normal
    switch (type) {
        case 'subTitle':
            style = styles.subTitle
            break
        case 'title':
            style = styles.title
            break
        case 'bigTitle':
            style = styles.bigTitle
            break
        case 'medium':
            style = styles.medium
            break
        case 'small':
            style = styles.small
            break
        case 'smallError':
            style = styles.smallError
            break
        case 'smallSuccess':
            style = styles.smallSuccess
            break
        case 'smallInfo':
            style = styles.smallInfo
            break
        case 'success':
            style = styles.success
            break
        case 'error':
            style = styles.error
            break
            case 'blueBackground':
                style = styles.blueBackground
            break
        default:
            break
    }
    let textColor = styles.black
    switch (color) {
        case "green":
            textColor = styles.green
            break
        case "red":
            textColor = styles.red
            break
        case "white":
            textColor = styles.white
            break
        case "gray":
            textColor = styles.gray
            break
        case "darkGray":
            textColor = styles.darkGray
            break
        case "info":
            textColor = styles.info
            break
        default:
            break
    }

    return (
        <p
            onClick={onClick}
            className={[style, textColor, bold ? styles.bold : styles.normalWeight, onClick ? styles.link : null, center ? styles.center : null, styles.main].join(' ')}
            style={size ? {'fontSize': size + 'px' , ...additionalStyle} : additionalStyle}>
            
            {text}
        </p>
    )
}

export default Text