import React from 'react';
import style from './Header.module.css'
import Nav from './nav/Nav';
import commonStyle from '../../common/styles/Container.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;