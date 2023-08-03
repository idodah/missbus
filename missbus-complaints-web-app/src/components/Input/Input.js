import React, { useState } from 'react'
import styles from './Input.module.css'

const Input = ({
    value='',
    setValue=()=>{},
    error='',
    label='',
    id='',
    width='100%',
    allowToChange=true,
}) => {

    const [textError, setTextError] = useState(error || '')
    const [active, setActive] = useState(false)

    const onChange = (event) => {
        setValue(event.target.value)
        setTextError('')
      }
    // const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;
    return (
        <div className={[styles.field, active ? styles.active: null].join(" ")} style={{width: width}} >
            <input
            id={id}
            type="text"
            value={value}
            placeholder={label}
            onChange={allowToChange ? onChange : null}
            onFocus={allowToChange ? () => setActive(true) : null}
            onBlur={allowToChange ? () => setActive(false) : null}
            />
            <label htmlFor={id} className={error && 'error'}>
                {textError || label}
            </label>
        </div>
    )
}

export default Input