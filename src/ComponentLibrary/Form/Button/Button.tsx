import React, { FormEvent } from 'react'
import button from "./button.module.scss"

interface ButtonProps{
    primary?: boolean;
    text: string;
    class?: any;
    onclick: (e: FormEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props: any) => {

    const {text, onclick,styleName} = props
    const classnames = Object.keys(props)
                           .filter((k) => props[k] === true)
                           .join(' ');
                           
    return (
        <>
            <button className={button.test} onClick={onclick}>{text}</button>
        </>
    )
}