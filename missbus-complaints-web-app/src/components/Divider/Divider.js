import React from 'react'
import styles from './Divider.module.css'

const Divider = ({ margin, color }) => {
    const style = {}
    if (margin) style.margin = margin.map(m => m + 'px').join(' ')
    if (color) style.background = color

    return (
        <div className={styles.divider} style={style}/>
    )
}

export default Divider
