import React from "react";
import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Button from "../button/Button";

const RemoteWork = () => {
    return (
        <div className={style.workBlock}>
            <div className={styleContainer.container}>
                <div className={style.smallWorkContainer}>
                  <div className={style.title}> <h4>looking for remote work options</h4></div>
                    <Button name={"hire me"}/>
                </div>
            </div>
        </div>
    )
}
export default RemoteWork;