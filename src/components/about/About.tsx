import React from 'react';
import style from './About.module.css'
import commonStyle from '../../common/styles/Container.module.css'


const About = () => {
    return (
        <section className={style.about}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <div>
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
                            <table>
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
                            </table>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;