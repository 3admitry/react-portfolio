import React from 'react';
import style from './Skills.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import iconSkillExample from '../../assets/images/icons/html.svg'


const Skills = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <h2>{'<Skills />'}</h2>
                <div className={style.skillBoxes}>
                    <div className={style.skillBox}>
                        <div>HTML</div>
                        <ul>
                            <li>
                                <div><img src={iconSkillExample}/></div>
                                <div>
                                    <div>HTML5</div>
                                    <div>2 Year Experience</div>
                                </div>
                            </li>
                            <li>
                                <div><img src={iconSkillExample}/></div>
                                <div>
                                    <div>HTML5</div>
                                    <div>2 Year Experience</div>
                                </div>
                            </li>
                            <li>
                                <div><img src={iconSkillExample}/></div>
                                <div>
                                    <div>HTML5</div>
                                    <div>2 Year Experience</div>
                                </div>
                            </li>
                            <li>
                                <div><img src={iconSkillExample}/></div>
                                <div>
                                    <div>HTML5</div>
                                    <div>2 Year Experience</div>
                                </div>
                            </li>


                        </ul>
                    </div>
                    <div className={style.skillBox}>REACT</div>
                    <div className={style.skillBox}>JS</div>
                    <div className={style.skillBox}>UI</div>
                    <div className={style.skillBox}>BACK</div>
                    <div className={style.skillBox}>SOFT</div>
                </div>
            </div>
        </section>
    );
};

export default Skills;