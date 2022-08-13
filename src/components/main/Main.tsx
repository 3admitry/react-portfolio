import React from 'react';
import style from '../../assets/scss/Main.module.scss'
import commonStyle from '../../common/styles/Container.module.scss'
import {ReactComponent as Git} from '../../assets/images/icons/git.svg'
import {ReactComponent as Link} from '../../assets/images/icons/link.svg'
import {ReactComponent as Telegram} from '../../assets/images/icons/telegram.svg'
import {Switch} from '@mui/material';
import {styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import SvgLinesMain from './addons/SvgLinesMain';
import cn from 'classnames';

const Main = React.memo(() => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.SyntheticEvent) => {
        setChecked((event.target as HTMLInputElement).checked);
    };

    return (
        <section className={style.main}>
            <div className={cn(style.container, commonStyle.container)}>
                <div className={style.leftBlock}>
                    <div className={style.leftBlockContent}>
                        <span className={style.intro}>Hi there, I am</span>
                        <h1>Dmitry Zagluhinsky</h1>
                        <div className={style.bigDescription}>
                            A FRONT-END (REACT) SOFTWARE ENGINEER
                        </div>
                        <div className={style.smallDescription}>
                            Previous positions: PHP-developer, Co-founder "SeoClick", SEO-Specialist, UI
                        </div>
                        <div className={style.connected}>
                            <div className={style.connectedLinks}>
                                <a className={style.socLinks} href="https://github.com/3admitry" target={'_blank'}
                                   rel="noreferrer noopener"><Git/></a>
                                <a className={style.socLinks} href="https://www.linkedin.com/in/3admitry"
                                   target={'_blank'} rel="noreferrer noopener"><Link/></a>
                                <a className={style.socLinks} href="https://t.me/iiiadi" target={'_blank'}
                                   rel="noreferrer noopener"><Telegram/></a>
                                <a href="/CV_Dmitry_Zagluhinsky.pdf" className={'button'} target={'_blank'}
                                   rel="noreferrer">Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.rightBlock}>
                    <div className={style.imgBlock}>
                        <div className={checked ? `${style.photo} ${style.digital}` : `${style.photo}`}>
                        </div>
                        <div className={style.imageSwitcher}>
                            <div className={style.description}>MYSELF IN</div>
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
                <a href={"#aboutme"}><SvgLinesMain/></a>
            </div>
        </section>
    );
});

export default Main;


// eslint-disable-next-line no-empty-pattern
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
            '& .MuiSwitch-thumb:before': {},
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
            content: '\'\'',
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#8796A5',
        borderRadius: 20 / 2,
    },
}));
