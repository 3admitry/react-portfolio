import React from 'react';
import style from './Contact.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import thxImg from '../../assets/images/thanks.webp'


const Contact = () => {
    return (
        <footer className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Contact />'}</h2>
                <div className={style.title}>Say Hello</div>
                <div className={style.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi enim est et nisi perspiciatis,
                    quisquam repellat vel. A animi, aspernatur at culpa, cumque deserunt ducimus.
                </div>
                <div className={style.thxImg}>
                    <img src={thxImg}/>
                </div>
            </div>
        </footer>
    );
};

export default Contact;