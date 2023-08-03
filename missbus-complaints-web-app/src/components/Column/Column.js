import React from 'react'
import Layout from '../Layout/Layout'

const Column = ({
    
    mainAxis='center', 
    crossAxis='center', 
    children,
    padding = [0],
    margin = [0],
    fullWidth = false,
    border=false,
    gap=null,
    classes = [],
    color,
    style = {},
    onClick,
    hoverEffect,

}) => {
    return (
        <Layout 
            children
            padding={padding}
            margin={margin}
            alignItems={crossAxis}
            justifyContent={mainAxis}
            fullWidth={fullWidth}
            gap={gap}
            classes={classes}
            color={color}
            style ={style}
            onClick={onClick}
            border={border}
            hoverEffect={hoverEffect}
        >
            {children}
        </Layout>
    )
}

export default Column