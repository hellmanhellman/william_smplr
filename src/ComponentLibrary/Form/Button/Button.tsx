import React, { FormEvent } from 'react'
import "./Button.scss"

interface ButtonProps{
    primary?: boolean;
    text: string;
    class?: any;
    onclick: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props: any) => {

    const {text, onclick} = props
    const classnames = Object.keys(props)
                           .filter((k) => props[k] === true)
                           .join(' ');
                           
    return (
        <>
            <button onClick={onclick} className={classnames}>{text}</button>
        </>
    )
}