import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import style from '../../assets/scss/Work.module.scss';
import todoImg from '../../assets/images/works/todolist.jpg'
import WorkTab from "./WorkTab";
import {createTheme} from '@mui/material';
import {styled} from "@mui/material/styles";
import {state} from "../../state/state";


export default function LabTabs() {
    const [value, setValue] = React.useState('all');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };


    const CustomizedTabPanel = styled(TabPanel)`
      padding: 0;
    `;

    return (
        <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box className={'workTabs'} sx={{borderBottom: 1, borderColor: 'var(--dark-slate)'}}>
                    <TabList onChange={handleChange} aria-label="work tabs">
                        <Tab className={'customTab'} label="All" value="all"/>
                        <Tab className={'customTab'} label="React/Redux" value="react"/>
                        <Tab className={'customTab'} label="PHP" value="php"/>
                        <Tab className={'customTab'} label="SEO" value="seo"/>
                        <Tab className={'customTab'} label="Design" value="design"/>
                        <Tab className={'customTab'} label="Speeches/Video" value="speeches"/>
                    </TabList>
                </Box>
                <div className={style.workBoxs}>
                    {
                        state.work.map(el => {
                            return (
                                <CustomizedTabPanel key={el.id} value={value === 'all' ? 'all'
                                    : el.type.indexOf(value) !== -1 ? value : ''}>
                                    <WorkTab project={el}/>
                                </CustomizedTabPanel>
                            )
                        })
                    }
                    { value==='seo' &&
                        <>
                        I have a lot of examples of SEO-projects, but i thinks that here it's no sense to public here, because my current direction is Front-end developing
                        </>
                    }
                </div>
            </TabContext>
        </Box>
    );
}
