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
                        description={"Lorem ipsum dolor sit amet, consectetur asperiores atque ducimus error"}/>
                    <Skill
                        icon={<CssIcon
                            color="action"
                            sx={{color: blue[800]}}
                            fontSize="large"
                        />}
                        title={"CSS"}
                        description={"excepturi, fuga hic mollitia nesciunt, perspiciatis quaerat quis quo"}/>
                    <Skill
                        icon={<GitHubIcon
                            sx={{color: blue[800]}}
                            fontSize="large"
                        />}
                        title={"GIT"}
                        description={"repudiandae rerumsapiente tempora!"}/>
                </div>
            </div>
        </div>
    )
};
export default Skills;