import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react'
import style from '../../assets/scss/Header.module.scss'
import {ReactComponent as Git} from '../../assets/images/icons/git.svg';
import {ReactComponent as Link} from '../../assets/images/icons/link.svg';
import {ReactComponent as Telegram} from '../../assets/images/icons/telegram.svg';

export const MobileMenu = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(()=>{
        if(isOpen){
            document.body.classList.add('bg-blur');
        }else{
            document.body.classList.remove('bg-blur');
        }
    },[isOpen])

    return (
        <div className={style.mobileMenu}>
            <div className={style.logo}>
                <a href={'/'}></a>
            </div>
            <div className={style.hamburger}>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#64ffda" rounded/>
            </div>

            <aside className={isOpen ? style.active : ''}>
                <nav>
                    <div>{'<'}<a onClick={() => setOpen(false)} href="#aboutme">About</a>{' />'}</div>
                    <div>{'<'}<a onClick={() => setOpen(false)} href="#experience">Experience</a>{' />'}</div>
                    <div>{'<'}<a onClick={() => setOpen(false)} href="#skills">Skills</a>{' />'}</div>
                    <div>{'<'}<a onClick={() => setOpen(false)} href="#work">Work</a>{' />'}</div>
                    <div>{'<'}<a onClick={() => setOpen(false)} href="#contact">Contact</a>{' />'}</div>
                    <div className={style.connectedLinks}>
                        <div className={style.socLinks}>
                            <a href="https://github.com/3admitry" target={'_blank'}
                                rel="noreferrer"><Git/></a>
                            <a href="https://www.linkedin.com/in/3admitry" target={'_blank'}
                               rel="noreferrer"><Link/></a>
                            <a href="https://t.me/iiiadi" target={'_blank'} rel="noreferrer"><Telegram/></a>
                        </div>
                        <div><a href="#" className={'button'} target={'_blank'} rel="noreferrer">Download CV</a></div>
                    </div>
                </nav>
            </aside>
        </div>

    )
}