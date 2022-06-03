import React from 'react';
import style from './Experience.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import ExperienceTabs from './ExperienceTabs';


export const Experience = () => {
    return (
        <section className={style.experience}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Experience />'}</h2>
                <ExperienceTabs/>
            </div>
        </section>
    );
};

