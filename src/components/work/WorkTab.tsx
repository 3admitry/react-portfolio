import React from 'react';
import style from "./Work.module.scss";
import git from "../../assets/images/icons/miniGit.svg";
import ext from "../../assets/images/icons/external.svg";
import todoImg from "../../assets/images/works/todolist.jpg";

const WorkTab = () => {
    return (
        <div className={style.workBox}>
            <div className={style.workBoxTop}>
                <a href="https://github.com/3admitry/react-todolist" target={'_blank'}>
                    <img src={git} alt="Ling to githab repository"/>
                </a>
                <a href="https://3admitry.github.io/react-todolist" target={'_blank'}>
                    <img src={ext} alt="External link to demo"/>
                </a>
            </div>
            <div className={style.workBoxInfo}>
                <div className={style.workBoxInfoImage} style={{backgroundImage: `url(${todoImg})`}}>

                </div>
                <div className={style.workBoxInfoContent}>
                    <div className={style.workBoxInfoContentTitle}>Todolist</div>
                    <div className={style.workBoxInfoContentDescription}>
                        Best project on the whole world
                    </div>
                    <div className={style.workBoxInfoContentStack}>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>TypeScript</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTab;