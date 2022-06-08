import React from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import style from './Experience.module.css'


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


function ExperienceTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={style.box}>
            <div className={style.tabs}>
                <Tabs value={value}
                      className={'customTabs'}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      orientation="vertical">
                    <Tab className={'customTab'} label={<> SeoClick <br/> <span>2015-2022</span> </>} {...a11yProps(0)} />
                    <Tab className={'customTab'} label={<> Kit.by <br/> <span>2014-2015</span> </>} {...a11yProps(1)} />
                    <Tab className={'customTab'} label={<> Seobility <br/> <span>2013-2014</span> </>} {...a11yProps(2)} />
                    <Tab className={'customTab'} label={<> Extrit <br/> <span>2012-2013</span> </>} {...a11yProps(3)} />
                </Tabs>
            </div>
            <div className={style.tabPanel}>
                <TabPanel value={value} index={0}>
                    Work in SeoClick
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda dolores doloribus,
                    eveniet excepturi fugit id iusto necessitatibus perferendis. Obcaecati.
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Work in Kit.by
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Work in Seobility
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Work in Extrit
                </TabPanel>
            </div>

        </div>
    );
}

export default ExperienceTabs;