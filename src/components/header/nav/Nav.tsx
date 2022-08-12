import React from 'react';
import style from '../../../assets/scss/Header.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <span>{'{'}<a href="/">Home</a>{'}'}</span>
            <span>{'{'}<a href={"#aboutme"}>About</a>{'}'}</span>
            <span>{'{'}<a href={"#experience"}>Experience</a>{'}'}</span>
            <span>{'{'}<a href={"#skills"}>Skills</a>{'}'}</span>
            <span>{'{'}<a href={"#work"}>Work</a>{'}'}</span>
            <span>{'{'}<a href={"#contact"}>Contact</a>{'}'}</span>
        </div>
    );
};

export default Nav;