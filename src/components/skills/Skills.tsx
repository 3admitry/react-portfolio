import React from 'react';
import style from './Skills.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const Skills = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Skills />'}</h2>
            </div>
        </section>
    );
};

export default Skills;