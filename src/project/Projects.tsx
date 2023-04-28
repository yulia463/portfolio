import React from "react";
import style from './Project.module.css';
import Project from "./Project";


const Projects = () => {
    return (
        <div className={style.project} >
            <div className={style.projectContainer}>
                <div className={style.title}>
                    <h2 > Projects</h2>
                </div>

                <div className={style.smallContainer}>
                    <Project
                        title={"название проекта"}
                        description={"краткое описание"}
                    />
                    <Project
                        title={"название проекта"}
                        description={"краткое описание"}
                    />
                </div>
            </div>
        </div>
    )
};
export default Projects;