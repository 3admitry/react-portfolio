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

function App() {
    return (
        <div className={style.App}>
            <Header/>
            <Main/>
            <About/>
            <Experience/>
            <Skills/>
            <Work/>
            <Contact/>
            <Ornament/>
        </div>
    );
}

export default App;
