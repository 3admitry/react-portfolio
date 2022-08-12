import React from 'react';
import style from '../../assets/scss/Header.module.scss'
import Nav from './nav/Nav';
import commonStyle from '../../common/styles/Container.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import {MobileMenu} from './MobileMenu';


const Header = () => {
    const isSHowHamBox = useMediaQuery('(max-width:768px)');
    return (
        <header className={style.header}>
            <div className={`${style.container} ${commonStyle.container}`}>
                {!isSHowHamBox && <Nav/>}
                {isSHowHamBox && <MobileMenu/>}
            </div>
        </header>
    );
};

export default Header;