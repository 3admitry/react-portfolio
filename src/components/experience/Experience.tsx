import React from 'react';
import style from '../../assets/scss/Experience.module.scss'
import commonStyle from '../../common/styles/Container.module.scss'
import ExperienceTabs from './ExperienceTabs';
import cn from 'classnames';

export const Experience = () => {
    return (
        <section className={style.experience}>
            <div className={cn(style.container, commonStyle.container)}>
                <h2 id={'experience'}>{'<Experience />'}</h2>
                <ExperienceTabs/>
                <div className={style.step3Direction}></div>
            </div>
        </section>
    );
};

