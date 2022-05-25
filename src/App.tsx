import React from 'react';
import './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
        </div>
    );
}

export default App;
