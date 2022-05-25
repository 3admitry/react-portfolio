import React from 'react';
import style from './About.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const About = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<AboutMe />'}</h2>
            </div>
        </section>
    );
};

export default About;