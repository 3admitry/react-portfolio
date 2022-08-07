import React, {useEffect, useState} from 'react';
import style from '../../assets/scss/Work.module.scss';
import todoImg from '../../assets/images/works/todolist.jpg';
import {ReactComponent as Ext} from '../../assets/images/icons/ext.svg';
import {ReactComponent as Git} from '../../assets/images/icons/git.svg';
import {ReactComponent as Image} from '../../assets/images/icons/image.svg';
import {ReactComponent as Gallery} from '../../assets/images/icons/gallery.svg';
import {RootStateType} from '../../state/state';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

type propsType = {
    project: {
        id: number
        type: string
        name: string
        title: string
        desc: string
        stack: Array<string>
        links?: {
            git?: string
            demo?: string
        }
        images?: Array<number>
    }
}

const WorkTab = ({project}: propsType) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const bgUrl = require(`../../assets/images/works/${project.name}.jpg`);

    console.log('Render')

    if (project.type === 'design') {
        var images = project.images?.map(el => require(`../../assets/images/works/dsg/${project.name}/${el}.jpg`))
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div className={style.workBox}>
            <div className={style.workBoxTop}>
                <span className={style.projectType}>{project.type}</span>
                {project.type === 'design'
                    ? <a href={void(0)} title={'Show images'} onClick={() => setIsOpen(true)}>
                                <Image/>
                       </a>
                    : <>
                        {project.links?.git &&
                            <a className={style.git} href={project.links.git} target={'_blank'}
                               title={'Ling to githab repository'} rel="noreferrer">
                                <Git/>
                            </a>
                        }
                        {project.links?.demo &&
                            <a href={project.links.demo} target={'_blank'} title={'External link to demo'}
                               rel="noreferrer">
                                <Ext/>
                            </a>
                        }
                    </>
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

            {isOpen && (
                <Lightbox
                    mainSrc={images && images[photoIndex]}
                    nextSrc={images && !(images.length===1) && images[(photoIndex + 1) % images.length]}
                    prevSrc={images && !(images.length===1) && images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => images && setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => images && setPhotoIndex((photoIndex + 1) % images.length)}
                    onImageLoad={() => {
                        window.dispatchEvent(new Event('resize'));
                    }}
                />
            )}
        </div>
    );
};

export default WorkTab;