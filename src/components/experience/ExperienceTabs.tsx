import React from 'react';
import {Box, Tab, Tabs, Typography} from "@mui/material";
import style from '../../assets/scss/Experience.module.scss'


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
                    <Tab className={'customTab'}
                         label={<> SeoClick <br/> <span>2015-2022</span> </>} {...a11yProps(0)} />
                    <Tab className={'customTab'} label={<> Kit.by <br/> <span>2014-2015</span> </>} {...a11yProps(1)} />
                    <Tab className={'customTab'}
                         label={<> Seobility <br/> <span>2013-2014</span> </>} {...a11yProps(2)} />
                    <Tab className={'customTab'} label={<> Extrit <br/> <span>2012-2013</span> </>} {...a11yProps(3)} />
                </Tabs>
            </div>
            <div className={style.tabPanel}>
                <TabPanel value={value} index={0}>
                    <div className={style.positionTitle}>
                        Full-stack developer / Director / Co-founder <a href="https://seoclick.by/"
                                                                        target={'_blank'}
                                                                        rel="noreferrer">@SeoClick</a>
                    </div>
                    <div className={style.dateRange}>April 2015 - August 2022</div>
                    <ul>
                        <li>Development of websites and web applications of various levels of complexity;</li>
                        <li>Development of your own seo project management system - SeoPlane (For more details, see
                            below, in the Work section);
                        </li>
                        <li>UI-design;</li>
                        <li>Communication, support and consulting of clients, preparation and conclusion of contracts,
                            resolution of conflict situations. Preparation of technical specifications;
                        </li>
                        <li>Personnel management, hiring, firing, conflict resolution, creating a good climate in the
                            team. Project management, task setting, control of their execution;
                        </li>
                        <li>Speaking at conferences</li>
                    </ul>
                    <p>
                        SeoClick - specializes in the development and promotion of corporate websites and online stores.
                        From 2019 to 2021, our agency took 1st place in website promotion and 3rd place in their
                        development in Brest. For the last 4 years we have been in the top 15 leading SEO studios in
                        Belarus. Brest.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className={style.positionTitle}>
                        In-house SEO-Specialist <a href="https://kit.by/"
                                                   target={'_blank'}
                                                   rel="noreferrer">@Kit</a>
                    </div>
                    <div className={style.dateRange}>November 2014 - April 2015</div>
                    <ul>
                        <li>Development of an SEO-strategy and its implementation for the largest online hypermarket of
                            construction, plumbing, climate and garden equipment Kit.by in Belarus;
                        </li>
                        <li>Hiring, interview of employees and management of a copywriting department - 4
                            persons;
                        </li>
                        <li>
                            Quality control analysis of the content management department in the framework of search
                            engine optimization - 15 persons.
                        </li>
                        <li>Development and application of a search engine optimization strategy together with
                            contextual advertising specialists.
                        </li>
                    </ul>
                    <p>
                        The Kit.by company is a retailer of high-quality construction products from leading
                        manufacturers. Thanks to innovative technologies, high-quality service and modern software,
                        kit.by Internet hypermarket is the largest seller of construction, plumbing, climate and garden
                        equipment in Belarus. Minsk.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className={style.positionTitle}>
                        SEO-Specialist / SEO-Analyst <a href="https://seobility.by/"
                                                        target={'_blank'}
                                                        rel="noreferrer">@Seobility</a>
                    </div>
                    <div className={style.dateRange}>November 2013 - 2014</div>
                    <ul>
                        <li>Full cycle of work on search engine optimization for the most important projects of the
                            company;
                        </li>
                        <li>Creation and implementation of an SEO strategy for large projects, work for a foreign
                            segment, work with multi-regional sites;
                        </li>
                        <li> In the middle through, I had given an offer to take a new position in the company as an
                            SEO-analyst;
                        </li>
                        <li>Analysis and study of features, patterns of search engine algorithms. Definition of
                            hypotheses, dispositions, identification of deterministic behaviors. Development of terms of
                            reference for research, A/B testing, reporting, implementation of results in business
                            processes.
                        </li>
                    </ul>
                    <p>
                        Seobility is a company that has been specializing in complex problem solving in the field of
                        Internet marketing since 2006. Minsk.
                    </p>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className={style.positionTitle}>
                        SEO-Specialist / SEO Team-lead <a href="https://extrit.by/"
                                                          target={'_blank'}
                                                          rel="noreferrer">@Extrit</a>
                    </div>
                    <div className={style.dateRange}>September 2012 - November 2013</div>
                    <ul>
                        <li>Search engine optimization of current and new projects of the company;</li>
                        <li>Comprehensive SEO audit of websites, Preparation of technical specifications for a
                            programmer, Analysis of competitors, development of a promotion strategy, Selection of
                            keywords, Optimization of meta, Content optimization, Implementation of semantic
                            markup, Compilation of composite tables and site structure, Link building, Solving any kind
                            of technical problems, Preparing progress reports;
                        </li>
                        <li>Creation and implementation of an SEO-strategy for large projects, work for a foreign
                            segment, work with multi-regional sites;
                        </li>
                        <li>Closer to the end of the work, several more SEO-specialists were hired in the company and I
                            got the position of SEO Team-lead:
                            Building a workflow for the SEO-team, Setting a task, monitoring and tracking the result of
                            the work of subordinates, improving efficiency and automating workflows, preparing reports
                            for management on the results of the SEO-department.
                        </li>
                    </ul>
                    <p>
                        Digital-agency Extrit is one of the leaders in providing a range of services for business
                        development on the Internet in Brest.
                    </p>
                </TabPanel>
            </div>
        </div>
    );
}

export default ExperienceTabs;