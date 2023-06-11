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
                        description={" JavaScript is a high-level, interpreted programming language primarily used" +
                            " for adding interactivity and dynamic behavior to web pages. It is a versatile language that " +
                            "can be executed on both the client side and the server side (with the help of" +
                            " Node.js)."}/>
                    <Skill
                        icon={<Css/>}
                        title={"CSS"}
                        description={"CSS  is a style sheet language used to describe the presentation and formatting " +
                            "of HTML and XML documents. It provides a set of rules that define how elements should be" +
                            " displayed on a web page, including aspects such as layout, colors, fonts, and spacing. \n"}/>
                    <Skill
                        icon={<Figma/>}
                        title={"FIGMA"}
                        description={'Figma is a cloud-based design and prototyping tool that enables teams to collaborate ' +
                            'in real-time on creating user interfaces, designs, and prototypes for web and mobile applications.' +
                            ' It is widely used by designers, developers, and product teams.'} />
                    <Skill
                        icon={<Html/>}
                        title={"HTML"}
                        description={"HTML is the standard markup language used for creating" +
                            " web pages and applications. It provides the structure and content of a webpage by using a" +
                            " set of tags and attributes."}/>
                    <Skill
                        icon={<TypeScript/>}
                        title={"TYPESCRIPT"}
                        description={'TypeScript is a statically typed superset of JavaScript that adds optional static' +
                            ' type checking to the language. It is developed and maintained by Microsoft. TypeScript' +
                            ' compiles to plain JavaScript and can run on any JavaScript runtime.'}/>
                    <Skill
                        icon={<Git/>}
                        title={"GIT"}
                        description={"GIT is a distributed version control system widely used in software development." +
                            " It allows multiple developers to collaborate on a project by keeping track of changes made " +
                            "to the source code over time. With GIT, developers can create separate branches to work on" +
                            " different features or bug fixes independently, and later merge their changes back into the main codebase. "}/>
                </div>
            </div>
        </div>
    )
};
export default Skills;