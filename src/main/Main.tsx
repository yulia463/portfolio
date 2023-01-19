import React from "react";
import style from './Main.module.css';
import styleContainer from '../../src/common/styles/Container.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>
                    Hi There
                </span>
                <h1>I am <br/> Yulia Slatvitskaya</h1>
                <p>Frontend Developer.</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    )
};
export default Main;