import React from "react";
import style from './Button.module.scss'
type ButtonPropsType = {
    name: string;
    className?: string;
}
const Button = (props: ButtonPropsType) => {
    return (
        <button className={`${style.projectButton} ${props.className}`}> {props.name}</button>
    )
}
export default Button;