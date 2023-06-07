import React from "react";
import style from './Project.module.scss';
import Project from "./Project";
import avatar from "../assets/image/avatar.png";
import profilePhoto from "../assets/image/profilePhoto.jpg"

const Projects = () => {
    const social = {
        backgroundImage: `url(${avatar})`
    }
    const todolist = {
        backgroundImage: `url(${avatar})`
    }
    const profilePhoto = {
        backgroundImage: `url(${avatar})`
    }
    return (
        <div className={style.project}>
            <div className={style.projectContainer}>
                <div className={style.title}>
                    <h2> Projects</h2>
                </div>

                <div className={style.smallContainer}>
                    <Project style={social}
                             title={"название проекта"}
                             description={"краткое описание"}
                    />
                    <Project style={todolist}
                             title={"название проекта"}
                             description={"краткое описание"}
                    />
                </div>
            </div>
        </div>
    )
};
export default Projects;