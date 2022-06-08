import React from 'react';
import style from './Main.module.css'
import commonStyle from '../../common/styles/Container.module.css'
import realPhoto from '../../assets/images/myself-real.webp'
import digitalPhoto from '../../assets/images/myself-digital.webp'
import git from '../../assets/images/icons/git.svg'
import link from '../../assets/images/icons/link.svg'
import telegram from '../../assets/images/icons/telegram.svg'
import {Switch} from '@mui/material';
import {styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import SvgLinesMain from "./addons/SvgLinesMain";


const Main = React.memo(() => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent) => {
        setChecked((event.target as HTMLInputElement).checked);
    };


    return (
        <section className={style.main}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <div className={style.leftBlock}>
                    <div>
                        <span className={style.intro}>Hi there, I am</span>
                        <h1>Dmitry Zagluhinsky</h1>
                        <div className={style.bigDescription}>
                            A FRONT-END (REACT) SOFTWARE ENGINEER
                        </div>
                        <div className={style.smallDescription}>
                            SEO-Specialist, Co-founder & ex-CEO digital-agency SeoClick
                        </div>
                        <div className={style.connected}>
                            <div className={style.connectedLinks}>
                                <a href=""><img src={git} alt=""/></a>
                                <a href=""><img src={link} alt=""/></a>
                                <a href=""><img src={telegram} alt=""/></a>
                                <a href='#' className={'button'}>Download CV</a>
                            </div>
                            {/*                        <div className={style.connectedCV}>

                        </div>*/}
                        </div>
                    </div>
                    <div className={style.directionBlock}>
                        <div>
                            {/*<SvgLinesMain />*/}
                        </div>
                    </div>

                </div>
                <div  className={style.rightBlock}>
                    <div className={style.imgBlock}>
                        <div><img className={style.photo} src={checked ? digitalPhoto : realPhoto} alt=""/></div>
                        <div className={style.imageSwitcher}>
                            <div>MYSELF IN</div>
                            <div>
                                <FormGroup>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <span className={!checked ? style.active : ''}>Real</span>
                                        <FormControlLabel onChange={(e) => handleChange(e)}
                                                          control={<MaterialUISwitch sx={{m: 1}}
                                                                                     defaultChecked={checked}/>}
                                                          label={''}
                                        />
                                        <span className={checked ? style.active : ''}>Digital</span>
                                    </Stack>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.ScrollBar}>
                <SvgLinesMain />
            </div>
        </section>
    );
});

export default Main;


const MaterialUISwitch = styled(Switch)(({}) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                /*                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                                    '#fff',
                                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,*/
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#8796A5',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: 'var(--green)',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            /*
                        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                            '#fff',
                        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
            */
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#8796A5',
        borderRadius: 20 / 2,
    },
}));
