import React from "react";
import style from './Skill.module.scss';

type SkillPropsType = {
    title: string
    description: any
}

const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    )
};
export default Skill;