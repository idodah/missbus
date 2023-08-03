import React from 'react'
import Layout from '../Layout/Layout'

const Row = ({
    
    mainAxis='center', 
    crossAxis='center', 
    children,
    padding = [0],
    margin = [0],
    fullWidth = false,
    gap=null,
    border=false,
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
            style ={{"flexDirection" : "row", ...style}}
            border={border}
            onClick={onClick}
            hoverEffect={hoverEffect}
        >
            {children}
        </Layout>
    )
}

export default Row