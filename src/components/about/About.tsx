import React from 'react';
import style from '../../assets/scss/About.module.scss'
import commonStyle from '../../common/styles/Container.module.scss'
import cn from 'classnames';

const About = () => {
    return (
        <section className={style.about}>
            <div className={cn(style.container, commonStyle.container)}>
                <h2 id={'aboutme'}>{'<AboutMe />'}</h2>
                <div className={style.aboutBox}>
                    <div className={style.aboutContent}>
                        <p> Hello everyone, my name is Dmitry! Today I dive into Front-End dev. I've had about a year of
                            experience with React and significant relevant knowledge in WebDev and internet-marketing.
                            I'm a really deep fan of programming. I like to be
                            in a state of constant self-development and discover something new both in knowledge and in
                            my abilities.
                        </p>
                        <p> Since my lyceum days, I've been interested in website development, but later switched
                            to search engine optimization and reached the level of expertise in this area today. In
                            2015, I with my business partner founded the digital-agency <a href="https://seoclick.by/"
                                                                                           target={'_blank'}
                                                                                           rel="noreferrer noopener">SeoClick</a>.
                            At first, we provided
                            SEO services, but then, at my suggestion, we opened website development directions, which I
                            headed, doing both management activities and pure coding and development practice.
                        </p>
                        <p> After 7 years in the company, I decided to leave it and move on in my personal development,
                            as the management routine has eaten me up and damn it, I love coding and want to devote more
                            time to it! It was a wonderful time and experience.
                        </p>
                        <p>
                            In 2019, I discovered React for the first time and completely fell in love with the
                            front-end. It turned my world upside down and i understand that's what I like and what i
                            want to do.</p>
                        <p>
                            I am a mega versatile person with a billion hobbies in the past. Today my interests are
                            Genealogy, natural sciences, drawing portraits, traveling, biking. I fond of to communicate
                            with
                            interesting people who can give me smth new and make better. I am married and have two
                            lovely
                            kids. I'll be glad to new contacts and offers. I'm sure that I will be a brilliant find for
                            your team and benefit the company.</p>
                    </div>
                    <div className={style.personalInfo}>
                        <div>
                            <h4>PERSONAL INFO</h4>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>Dmitry Zagluhinsky</td>
                                </tr>
                                <tr>
                                    <td>Location:</td>
                                    <td>Brest, Belarus</td>
                                </tr>
                                <tr>
                                    <td>Languages:</td>
                                    <td>English – Intermediate (B1)
                                        <br />Russian, Belarusian – Native Speaker</td>
                                </tr>
                                <tr>
                                    <td>Interests:</td>
                                    <td>Genealogy, natural sciences, drawing portraits, traveling, biking</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h4>EDUCATION</h4>
                            <div className={style.education}>
                                <h5>Higher education:</h5>
                                <div className={style.dateRange}>2008-2013</div>
                                <div className={style.eduTitle}>Brest State Technical University</div>
                                <div>Faculty › <a href="https://old.bstu.by/en/faculties/electronic-information-systems"
                                                  target={'_blank'}
                                                  rel="noreferrer noopener">Electronics and Information systems</a>
                                </div>
                                <div>Specialization › Systems Engineer</div>
                                <div>Degree › Specialist</div>
                                <h5>Vocational education:</h5>
                                <div className={style.dateRange}>2005-2008</div>
                                <div className={style.eduTitle}>Brest State Professional Lyceum</div>
                                <div>Specialization › Computer Operator</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.step2Direction}></div>
            </div>
        </section>
    );
};

export default About;