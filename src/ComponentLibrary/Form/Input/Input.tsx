import React, { ChangeEvent } from 'react'
import "./Input.scss"

interface InputProps{
    primary?: boolean;
    type: string;
    placeholder: any;
    value: string;
    class?: any;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props: any) => {

    const {type, placeholder, value, handleChange} = props

    const classnames = Object.keys(props)
                           .filter((k) => props[k] === true)
                           .join(' ');

    return (
        <>
            <input className={classnames} placeholder={placeholder} type={type} value={value} onChange={handleChange}/>
        </>
    )
}
