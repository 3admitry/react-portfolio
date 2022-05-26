import React from 'react';
import style from './Experience.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const Experience = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Experience />'}</h2>

            </div>
        </section>
    );
};

export default Experience;