import React from 'react'
import styles from './EmergencyButton.module.css'
import Button from '../Button/Button'
import Text from '../Text'

const EmergencyButton = ({
    text='',
    size=24,
    width='256px',
    style={},
    textStyle={},
    onClick=()=>{}
}) => {
    return (
        <Button classes={[styles.emergencyButton]} style={{"maxWidth": width, ...style}} onClick={onClick}>
            <Text text={text} bold size={size} additionalStyle={textStyle}/>
        </Button>
    )
}

export default EmergencyButton