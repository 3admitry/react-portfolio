import React from 'react';
import style from '../../assets/scss/Skills.module.scss'
import commonStyle from '../../common/styles/Container.module.css'
import iconSkillExample from '../../assets/images/icons/html.svg'
import {RootStateType, state} from "../../state/state";
import cn from "classnames";



const Skills = () => {
    return (
        <section className={style.skills}>
            <div className={cn(style.container, commonStyle.container)}>
                <h2 id={'skills'}>{'<Skills />'}</h2>
                <div className={style.skillBoxes}>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.html}/></div>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.react}/></div>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.js}/></div>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.seo}/></div>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.backend}/></div>
                    <div className={style.skillBox}><ShowSkills skills={state.skills.design}/></div>
                </div>
                <div className={style.step4Direction}></div>
            </div>
        </section>
    )
        ;
};

type ShowSkillsPropsType = {
    skills: {
        title: string
        description: string
        items: Array<{ name: string, image: string }>
    }
}

const ShowSkills = (props: ShowSkillsPropsType) => {
    return (
        <>
            <div className={style.titleSkillBox}>{props.skills.title}</div>
            <div className={style.descriptionSkillBox}>{props.skills.description}</div>
            <ul>
                {props.skills.items.map((skill, index) => {
                    return <li key={index + skill.name}>
                        <div className={style.iconSkill}><img alt='' src={
                            require('../../assets/images/icons/' +
                                skill.image +
                                '.svg')
                        }/></div>
                        <div className={style.nameSkill}>
                            {skill.name}
                        </div>
                    </li>
                })}
            </ul>
        </>
    );
};

export default Skills;