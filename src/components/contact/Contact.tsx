import React from 'react';
import style from './Contact.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const Contact = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Contact />'}</h2>
            </div>
        </section>
    );
};

export default Contact;