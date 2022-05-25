import React from 'react';
import style from './Work.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const Work = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Work />'}</h2>
            </div>
        </section>
    );
};

export default Work;