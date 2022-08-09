import React from 'react';
import style from '../../assets/scss/Work.module.scss'
import commonStyle from '../../common/styles/Container.module.css'
import WorkTabs from "./WorkTabs";


const Work = () => {
    return (
        <section className={style.work}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Work />'}</h2>
                <div className={style.workDescription}>
                    <p>In the period from 2012 to 2022, I personally and with my participation developed more than 46
                        web applications and websites, provided search engine optimization services for more than 108
                        projects and developed many designs for them. Below I have presented some of them that deserve
                        your attention.</p>
                </div>
                <WorkTabs/>
                <div className={style.step5Direction}></div>
            </div>
        </section>
    );
};

export default Work;