import React from "react";
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
            <div className={style.text}>
                <span>
                    Hi There
                </span>
              <div className={style.title}><h3>I am <br/> Yulia Slatvitskaya</h3></div>
                <p>Frontend Developer.</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    )
};
export default Main;