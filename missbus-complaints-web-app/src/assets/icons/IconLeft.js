import React from 'react'

const IconLeft = ({size = 24, color = '#13181B', rotate=0}) => {
    return (
        <svg style={{rotate: `${rotate}deg`, "transition": "0.2s"  }} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L8 12L15 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default IconLeft


