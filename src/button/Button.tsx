import React from "react";
import style from './Button.module.css'
type ButtonPropsType = {
    name: string
}
const Button = (props: ButtonPropsType) => {
    return (
        <button className={style.projectButton}> {props.name}</button>
    )
}
export default Button;