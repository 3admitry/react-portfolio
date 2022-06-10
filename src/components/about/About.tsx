import React from 'react';
import style from './About.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import SvgLinesAbout from "./SvgLinesAbout";


const About = () => {
    return (
        <section className={style.about}>
            {/*            <div className={style.lineAbout}>
                <SvgLinesAbout />
            </div>*/}
            <div className={`${commonStyle.container} ${style.container}`}>

                <h2>{'<AboutMe />'}</h2>
                <div className={style.aboutBox}>
                    <div>
                        <p> I’m a Front-End Developer located in Belarus. I have a serious passion for UI effects,
                            animations and creating intuitive, dynamic user experiences.
                        </p>
                        <p> Well-organised person, problem solver, independent employee with high attention to
                            detail. Fan
                            of MMA, outdoor activities, TV series and English literature. A family person and father
                            of two
                            fractious boys,
                        </p>
                        <p> Interested in the entire frontend spectrum and working on ambitious projects with
                            positive
                            people.
                        </p>
                    </div>
                    <div>
                        <h4>PERSONAL INFO</h4>
                        <table className={style.personalInfo}>
                            <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>Dmitry Zagluhinsky</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>32 Years</td>
                            </tr>
                            <tr>
                                <td>Nationality:</td>
                                <td>Belarus</td>
                            </tr>
                            <tr>
                                <td>Education:</td>
                                <td>BSTU, specialist degree</td>
                            </tr>
                            <tr>
                                <td>Languages:</td>
                                <td>English (B1), Russian</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className={style.step2Direction}></div>
            </div>


        </section>
    );
};

export default About;