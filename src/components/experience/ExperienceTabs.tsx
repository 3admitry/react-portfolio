import React from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";


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
        <Box sx={{width: '100%', display: 'flex', bgcolor: 'white', borderRadius: '5px', p:3}}>
            <Box sx={{borderRight: 1, borderColor: 'divider'}}>
                <Tabs value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                      orientation="vertical">
                    <Tab label={<> SeoClick <br/> 2015-2022 </>} {...a11yProps(0)} />
                    <Tab label={<> Kit.by <br/> 2014-2015 </>} {...a11yProps(1)} />
                    <Tab label={<> Seobility <br/> 2013-2014 </>} {...a11yProps(2)} />
                    <Tab label={<> Extrit <br/> 2013-2014 </>} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Work in SeoClick
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
        </Box>
    );
}

export default ExperienceTabs;