import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import profilePhoto from "../assets/image/profilePhoto.jpg"
import avatar from "../assets/image/avatar.png";


const Main = () => {
    const profilePhoto = {
        backgroundImage: `url(${avatar})`
    }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                <span className={style.greeting}>
                    Hi There
                </span>
                    <div className={style.title}><h3>I am <br/> Yulia Slatvitskaya</h3></div>
                    <p className={style.description}>Frontend Developer.</p>
                </div>
                <div className={style.photo} style={profilePhoto}></div>
            </div>
        </div>
    )
};
export default Main;