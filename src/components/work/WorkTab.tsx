import React, {useState} from 'react';
import style from '../../assets/scss/Work.module.scss';
import {ReactComponent as Ext} from '../../assets/images/icons/ext.svg';
import {ReactComponent as Git} from '../../assets/images/icons/git.svg';
import {ReactComponent as Image} from '../../assets/images/icons/image.svg';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import cn from "classnames";

type propsType = {
    project: {
        id: string
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
        featured: boolean
    }
}

const WorkTab = ({project}: propsType) => {
    const [photoIndex, setPhotoIndex] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const bgUrl = require(`../../assets/images/works/${project.name}.jpg`);
    let images = project.images?.map(el => require(`../../assets/images/works/dsg/${project.name}/${el}.jpg`))

    return (
        <div className={cn(style.workBox, {[style.featuredBox]: project.featured})}>
            <div className={style.workBoxTop}>
                <span className={style.projectType}>{project.type}</span>

                {project.links?.git &&
                    <a className={style.git} href={project.links.git} target={'_blank'}
                       title={'Link to github repository'} rel="noreferrer noopener">
                        <Git/>
                    </a>
                }

                {project.images &&
                    <span className={style.workBoxTopDesign} title={'Show design'} onClick={() => setIsOpen(true)}>
                        <Image/>
                        <span className={style.countImages}>{project.images.length}</span>
                    </span>
                }

                {project.links?.demo &&
                    <a href={project.links.demo} target={'_blank'} title={'External link'}
                       rel="noreferrer noopener">
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

            {isOpen && (
                <Lightbox
                    mainSrc={images && images[photoIndex]}
                    nextSrc={images && !(images.length === 1) && images[(photoIndex + 1) % images.length]}
                    prevSrc={images && !(images.length === 1) && images[(photoIndex + images.length - 1) % images.length]}
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