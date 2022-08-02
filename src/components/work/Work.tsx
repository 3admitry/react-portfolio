import React from 'react';
import style from './Work.module.scss'
import commonStyle from '../../common/styles/Container.module.css'
import WorkTabs from "./WorkTabs";


const Work = () => {
    return (
        <section className={style.work}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Work />'}</h2>
                <WorkTabs />
                <div className={style.step5Direction}></div>
            </div>
        </section>
    );
};

export default Work;