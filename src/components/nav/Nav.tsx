import React from 'react';
import style from './Nav.module.css'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="#">Home</a>
            <a href="#">About me</a>
            <a href="#">My skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Contacts</a>
        </div>
    );
};

export default Nav;