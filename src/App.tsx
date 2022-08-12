import React from 'react';
import style from './assets/scss/App.module.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import {Experience} from "./components/experience/Experience";
import Ornament from "./components/ornament/Ornament";
import useMediaQuery from '@mui/material/useMediaQuery';
//@ts-ignore
import Headroom from 'react-headroom';

function App() {
    const isSHowHamBox = useMediaQuery('(max-width:768px)');
    return (
        <div className={style.App}>
            {isSHowHamBox
                ? <Headroom className={style.HeadroomWrap}><Header/></Headroom>
                : <Header/>
            }

            <div className={'mainContent'}>
                <Main/>
                <About/>
                <Experience/>
                <Skills/>
                <Work/>
                <Contact/>
                <Ornament/>
            </div>
        </div>
    );
}

export default App;
