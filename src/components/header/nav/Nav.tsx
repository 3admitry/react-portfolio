import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <span>{'{'}<a href="#">Home</a>{'}'}</span>
            <span>{'{'}<a href="#">AboutMe</a>{'}'}</span>
            <span>{'{'}<a href="#">Skills</a>{'}'}</span>
            <span>{'{'}<a href="#">Work</a>{'}'}</span>
            <span>{'{'}<a href="#">Contact</a>{'}'}</span>
        </div>
    );
};

export default Nav;