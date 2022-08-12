import * as React from 'react';
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WorkTab from "./WorkTab";
import {styled} from "@mui/material/styles";
import {state} from "../../state/state";
import cn from "classnames";
import style from '../../assets/scss/Work.module.scss';

export default function LabTabs() {
    const [value, setValue] = React.useState('all');
    const [countItems, setCountItems] = React.useState(6);

    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
    }, [value, countItems]);


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        setCountItems(6)
    };

    const CustomizedTabPanel = styled(TabPanel)`
      padding: 0;
    `;

    let filteredWorks = state.works.filter(w => {
        if (value === 'all') return true
        return w.type.indexOf(value) !== -1;
    });

    const slicedWorks = filteredWorks.slice(0, countItems);

    const showMoreHandler = () => {
        if (countItems < filteredWorks.length) {
            setCountItems(countItems + 6)
        }
    }

    return (
        <Box className={style.workContainer} sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box className={'workTabs'} sx={{borderBottom: 1, borderColor: 'var(--dark-slate)'}}>
                    <TabList onChange={handleChange} aria-label="work tabs"
                             variant="scrollable"
                             scrollButtons
                             allowScrollButtonsMobile>
                        <Tab className={'customTab'} label="All" value="all"/>
                        <Tab className={'customTab'} label="React/Redux" value="react"/>
                        <Tab className={'customTab'} label="PHP" value="php"/>
                        <Tab className={'customTab'} label="SEO" value="seo"/>
                        <Tab className={'customTab'} label="Design" value="design"/>
                        <Tab className={'customTab'} label="Speeches/Video" value="speeches"/>
                    </TabList>
                </Box>
                <div className={cn(style.workBoxes, {[style.workSeoBoxes]: value === 'seo'})}>
                    {
                        slicedWorks.map(el => {
                            return (
                                <CustomizedTabPanel key={el.id} value={value === 'all' ? 'all' : value}>
                                    <WorkTab project={el}/>
                                </CustomizedTabPanel>
                            )
                        })
                    }
                    {value === 'seo' &&
                        <>
                            Given that my current position is a front-end developer, I don't see much point in hosting a
                            huge number of projects that are SEO related. Some of them you can find on the <a
                            href="https://seoclick.by/portfolio/prodvizhenie-sajtov" target={'_blank'}
                            rel="noreferrer noopener">link</a> or
                            contact me, I will share them with you. Really, there are a lot of them.
                        </>
                    }
                </div>
            </TabContext>
            <div className={style.showMore}>
                {
                    countItems < filteredWorks.length &&
                    <button className={'button'} onClick={showMoreHandler}>
                        Show more
                    </button>
                }
            </div>
        </Box>
    );
}
