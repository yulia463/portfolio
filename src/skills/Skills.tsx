import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import Skill from "./skill/Skill";
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import {pink, yellow} from "@mui/material/colors";
import {blue} from "@material-ui/core/colors";

const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
                <div className={style.title}>
                    <h2> Skills</h2>
                </div>
                <div className={style.skills}>
                    <Skill
                        icon={<JavascriptIcon
                            color="action"
                            sx={{color: yellow[600]}}
                            fontSize="large"
                        />}
                        title={"JS"}

                        description={" JavaScript is a high-level, interpreted programming language primarily used" +
                            " for adding interactivity and dynamic behavior to web pages. It is a versatile language that " +
                            "can be executed on both the client side and the server side (with the help of" +
                            " Node.js)."}/>
                    <Skill
                        icon={<CssIcon
                            color="action"
                            sx={{color: blue[800]}}
                            fontSize="large"
                        />}
                        title={"CSS"}
                        description={"CSS  is a style sheet language used to describe the presentation and formatting " +
                            "of HTML and XML documents. It provides a set of rules that define how elements should be" +
                            " displayed on a web page, including aspects such as layout, colors, fonts, and spacing. \n"}/>
                    <Skill
                        icon={<GitHubIcon
                            sx={{color: blue[800]}}
                            fontSize="large"
                        />}
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