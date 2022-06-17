import React from 'react';
import style from './Contact.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import thxImg from '../../assets/images/thanks.webp'


const Contact = () => {
    return (
        <footer className={style.contact}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Contact />'}</h2>
                <div className={style.title}>Let's be in touch</div>
                <div className={style.description}>
                    Now I'm looking for new opportunities and open to any suggestions.<br /> You can just 'Send Hello' to my inbox or 'Say Hello' in my Telegram
                </div>
                <div className={style.connectBox} >
                    <div>
                        <a className="button" href="mailto:3a.dmitriy@gmail.com" rel="noopener noreferrer"
                           target="_blank">Send Hello</a>
                    </div>
                    <div>
                        <a className="button" href="https://t.me/iiiadi" rel="noopener noreferrer"
                           target="_blank">Say Hello</a>
                    </div>
                </div>
                <div className={style.thxImg}>
                    <img src={thxImg} width={'300px'} height={'300px'}/>
                </div>
            </div>
        </footer>
    );
};

export default Contact;