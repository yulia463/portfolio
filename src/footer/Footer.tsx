import React from "react";
import style from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.nameBlock}>
                <h2 className={style.title}>Yulia Slatvitskaya</h2>
            </div>
            <div className={style.smallBlock}>
                <div className={style.footerIcon}>1</div>
                <div className={style.footerIcon}>1</div>
                <div className={style.footerIcon}>1</div>
                <div className={style.footerIcon}>1</div>

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