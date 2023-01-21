import React from "react";
import Button from "../button/Button";
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: any
}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.smallProject}>
            <div className={style.buttonDiv}><Button name={"watch"}/> </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
};
export default Project;