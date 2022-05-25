import React, { useState } from 'react';
import style from './Main.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import realPhoto from '../../assets/images/myself-real3.png'
import digitalPhoto from '../../assets/images/myself-digital.png'
import { Switch } from '@mui/material';
import Typography from '@mui/material/Typography';


const Main = () => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <section className={style.main}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <div>
                    <span className={style.intro}>Hi there, I am</span>
                    <h1>Dmitry Zagluhinsky</h1>
                    <div className={style.bigDescription}>A FRONT-END (REACT) SOFTWARE ENGINEER</div>
                    <div className={style.smallDescription}>SEO-Specialist, Co-founder & ex-CEO digital-agency SeoClick</div>
                    <a href='#' className={'button'}>Download CV</a>
                </div>
                <div className={style.photo}>
                    <img src={checked ? realPhoto: digitalPhoto} alt=""/>
                    <Typography>Real</Typography>
                    <Switch
                        size={'medium'}
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <Typography>Digital</Typography>
                </div>
            </div>
        </section>
    );
};

export default Main;