import React from "react";
import style from './RemoteWork.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Button from "../button/Button";

const RemoteWork = () => {
    return (
        <div className={style.workBlock}>
            <div className={styleContainer.container}>
                <div className={style.smallWorkContainer}>
                    <h1>looking for remote work options</h1>
                    <Button name={"hire me"}/>
                </div>
            </div>
        </div>
    )
}
export default RemoteWork;