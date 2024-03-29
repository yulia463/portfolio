import React from "react";
import style from './Project.module.scss'
import Button from "../button/Button";

type ProjectPropsType = {
    title: string
    description: any
    style: any
}
const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.smallProject}>
            <div className={style.image} style={props.style}>
                {/*<a className={style.viewBtn}>Watch</a>*/}
                <Button className={style.viewBtn} name={'Whatch'}/>
            </div>

            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    )
};
export default Project;