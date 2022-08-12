import React from 'react';
import style from '../../assets/scss/Header.module.scss'
import Nav from './nav/Nav';
import commonStyle from '../../common/styles/Container.module.scss';
import useMediaQuery from '@mui/material/useMediaQuery';
import {MobileMenu} from './MobileMenu';

const Header = () => {
    const isMediaQuery768 = useMediaQuery('(max-width:768px)');

    return (
            <header className={style.header}>
                <div className={`${style.container} ${commonStyle.container}`}>
                    {!isMediaQuery768 && <Nav/>}
                    {isMediaQuery768 && <MobileMenu/>}
                </div>
            </header>

    );
};

export default Header;