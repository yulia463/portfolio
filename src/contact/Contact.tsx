import React from "react";
import style from './Contact.module.css';
import Button from "../button/Button";

const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contactContainer}>
               <h1 className={style.title}> Contacts</h1>
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