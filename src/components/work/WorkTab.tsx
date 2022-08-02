import React from 'react';
import style from '../../assets/scss/Work.module.scss';
import todoImg from '../../assets/images/works/todolist.jpg';
import {ReactComponent as Ext} from '../../assets/images/icons/ext.svg';
import {ReactComponent as Git} from '../../assets/images/icons/git.svg';
import {RootStateType} from '../../state/state';

type propsType = {
    project: {
        id: number
        type: string
        title: string
        desc: string
        img: string
        stack: Array<string>
        links: {
            git?: string
            demo?: string
        }
    }
}

const WorkTab = ({project}: propsType) => {
    const bgUrl = require('../../assets/images/works/' + project.img + '.jpg');
    return (
        <div className={style.workBox}>
            <div className={style.workBoxTop}>
                {project.links.git &&
                    <a className={style.git} href={project.links.git} target={'_blank'}
                       title={'Ling to githab repository'} rel="noreferrer">
                        <Git/>
                    </a>
                }
                {project.links.demo &&
                    <a href={project.links.demo} target={'_blank'} title={'External link to demo'} rel="noreferrer">
                        <Ext/>
                    </a>
                }
            </div>
            <div className={style.workBoxInfo}>
                <div className={style.workBoxInfoImage} style={{backgroundImage: `url(${bgUrl})`}}></div>
                <div className={style.workBoxInfoContent}>
                    <div className={style.workBoxInfoContentTitle}>{project.title}</div>
                    <div className={style.workBoxInfoContentDescription}>{project.desc}</div>
                    <div className={style.workBoxInfoContentStack}>
                        <ul>
                            {project.stack.map((el, i) => <li key={i}>{el}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTab;