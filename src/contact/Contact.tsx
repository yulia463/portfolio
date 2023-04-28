import React from "react";
import style from './Contact.module.css';
import Button from "../button/Button";

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
             <div className={style.title}><h2 > Contacts</h2></div>
                    <form>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                   <div className={style.btnContacts}>
                       <Button name={"Send"}/>
                   </div>
            </div>
        </div>
    )
}
export default Contact;