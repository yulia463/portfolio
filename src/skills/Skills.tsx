import React from "react";
import style from './Skills.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer} `}>
               <div className={style.title}>
                   <h2 > Skills</h2>
               </div>
                <div className={style.skills}>
                    <Skill
                        title={"JS"}
                        description={"Lorem ipsum dolor sit amet, consectetur asperiores atque ducimus error"}/>
                    <Skill
                        title={"CSS"}
                        description={"excepturi, fuga hic mollitia nesciunt, perspiciatis quaerat quis quo"}/>
                    <Skill
                        title={"REACT"}
                        description={"repudiandae rerumsapiente tempora!"}/>
                </div>
            </div>
        </div>
    )
};
export default Skills;