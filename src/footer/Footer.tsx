import React from "react";
import style from './Footer.module.scss';
import {Git} from "../icons/Git";
import {LinkedIn} from "../icons/LinkedIn";
import {Telegram} from "../icons/Telegram";
import {Facebook} from "../icons/Facebook";


const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.nameBlock}>
                <h2 className={style.title}>Yulia Slatvitskaya</h2>
            </div>
            <div className={style.smallBlock}>
                <div className={style.footerIcon}><Git/></div>
                <div className={style.footerIcon}><LinkedIn/></div>
                <div className={style.footerIcon}><Telegram/></div>
                <div className={style.footerIcon}><Facebook/></div>
            </div>
            <div className={style.iconAndText}>
                <div className={style.text}>
                    © 2023 All rights reserved
                </div>
            </div>
        </div>
    )
}
export default Footer;