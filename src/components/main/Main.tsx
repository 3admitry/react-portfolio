import React from 'react';
import style from './Main.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import mainPhoto from '../../assets/images/main_photo.png'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={commonStyle.container}>
                <div>
                    <span>Hi There</span>
                    <h1>I am Dmitry Zagluhinsky</h1>
                    <p>A FRONT-END DEVELOPER</p>
                </div>
                <div className={style.photo}>
                    <img src={mainPhoto} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;