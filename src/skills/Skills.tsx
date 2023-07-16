import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from "./skill/Skill";
import {Git} from "../icons/Git";
import {Css} from "../icons/Css";
import {JavaScript} from "../icons/JavaScript";
import {Figma} from "../icons/Figma";
import {Html} from "../icons/Html";
import {TypeScript} from "../icons/TypeScript";

const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <div className={style.title}>
                    <h2> Skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill
                        icon={<JavaScript/>}
                        title={"JS"}
                        // description={" JavaScript is a high-level, interpreted programming language primarily used" +
                        //     " for adding interactivity and dynamic behavior to web pages."}
                    />
                    <Skill
                        icon={<Css/>}
                        title={"CSS"}
                          />
                    <Skill
                        icon={<Figma/>}
                        title={"FIGMA"}
                     />
                    <Skill
                        icon={<Html/>}
                        title={"HTML"}
                       />
                    <Skill
                        icon={<TypeScript/>}
                        title={"TYPESCRIPT"}
                         />
                    <Skill
                        icon={<Git/>}
                        title={"GIT"}
                       />
                </div>
            </div>
        </div>
    )
};
export default Skills;