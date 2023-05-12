import React from "react";
import Button from "../button/Button";
import style from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: any
    style: any
}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.smallProject}>
            <div className={style.image} style={props.style}>
                <a className={style.viewBtn}>Watch</a></div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
};
export default Project;