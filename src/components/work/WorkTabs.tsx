import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import style from './Work.module.css';

export default function LabTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box className={'workTabs'} sx={{borderBottom: 1, borderColor: 'var(--dark-slate)'}}>
                    <TabList onChange={handleChange} aria-label="work tabs">
                        <Tab className={'customTab'} label="All" value="all"/>
                        <Tab className={'customTab'} label="React/Redux" value="1"/>
                        <Tab className={'customTab'} label="HTML/CSS" value="2"/>
                        <Tab className={'customTab'} label="PHP" value="3"/>
                        <Tab className={'customTab'} label="SEO" value="4"/>
                        <Tab className={'customTab'} label="Design" value="5"/>
                        <Tab className={'customTab'} label="All" value="6"/>
                    </TabList>
                </Box>
                <div className={style.workBoxs}>
                    <TabPanel value={value === 'all' ? 'all' : '1'}>Item One</TabPanel>
                    <TabPanel value={value === 'all' ? 'all' : '2'}>Item Two</TabPanel>
                    <TabPanel value={value === 'all' ? 'all' : '3'}>Item Three</TabPanel>
                    <TabPanel value={value === 'all' ? 'all' : '4'}>Item 4</TabPanel>
                    <TabPanel value={value === 'all' ? 'all' : '5'}>Item 5</TabPanel>
                    <TabPanel value={value === 'all' ? 'all' : '6'}>Item 6</TabPanel>
                </div>
            </TabContext>
        </Box>
    );
}
