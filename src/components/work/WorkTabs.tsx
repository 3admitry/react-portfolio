import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import style from './Work.module.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function WorkTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', /*bgcolor: 'white'*/}}>
            <Box className={'workTabs'} sx={{borderBottom: 1, borderColor: 'var(--dark-slate)'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    <Tab className={'customTab'} label="React/Redux" {...a11yProps(0)} />
                    <Tab className={'customTab'} label="JS" {...a11yProps(1)} />
                    <Tab className={'customTab'} label="HTML/CSS" {...a11yProps(2)} />
                    <Tab className={'customTab'} label="PHP" {...a11yProps(3)} />
                    <Tab className={'customTab'} label="SEO" {...a11yProps(4)} />
                    <Tab className={'customTab'} label="Design" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <div className={style.workBoxs}>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item two
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </div>
        </Box>
    );
}
