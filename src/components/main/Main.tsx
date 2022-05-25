import React, { useState } from 'react';
import style from './Main.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import realPhoto from '../../assets/images/myself-real3.png'
import digitalPhoto from '../../assets/images/myself-digital.png'


const Main = () => {
    let[isReal,setReal] = useState(true);

    const changeImg = () => {
        setReal(!isReal);
    }

    return (
        <div className={style.main}>
            <div className={commonStyle.container}>
                <div>
                    <span>Hi There</span>
                    <h1>I am Dmitry Zagluhinsky</h1>
                    <p>A FRONT-END DEVELOPER</p>
                </div>
                <div className={style.photo} onClick={changeImg}>
                    <img src={isReal ? realPhoto: digitalPhoto} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;