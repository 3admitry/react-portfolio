// import React from "react";
import {v4} from 'uuid';

export const state = {
    skills: {
        html: {
            title: 'HTML/CSS',
            description: '5+ Years Experience',
            items: [
                {name: 'HTML5', image: 'html'},
                {name: 'CSS3', image: 'css'},
                {name: 'Sass/SCSS', image: 'sass'},
                {name: 'Module CSS', image: 'module-css'},
                {name: 'Bootstrap', image: 'bootstrap'},
                {name: 'BEM', image: 'bem'},
            ]
        },
        react: {
            title: 'REACT/REDUX',
            description: '~1 Years Experience',
            items: [
                {name: 'React', image: 'react'},
                {name: 'Redux', image: 'redux'},
                {name: 'Redux-thunk', image: 'redux'},
                {name: 'Unit Testing', image: 'test'},
                {name: 'Storybook', image: 'storybook'},
                {name: 'Material UI & Ant Design', image: 'mui'},
            ]
        },
        js: {
            title: 'JavaScript',
            description: '3+ Years Experience',
            items: [
                {name: 'JS ES6+', image: 'js'},
                {name: 'TypeScript', image: 'ts'},
                {name: 'Node.js', image: 'node'},
                {name: 'Webpack', image: 'webpack'},
                {name: 'Yarn/npm', image: 'yarn'},
                {name: 'Git', image: 'gitOfficial'},
            ]
        },
        seo: {
            title: 'SEO',
            description: '10+ Years Experience',
            items: [
                {name: 'search engine optimization expertise', image: 'html'},
                {name: 'Keyword Research', image: 'css'},
                {name: 'Meta Optimization', image: 'sass'},
                {name: 'Content Optimization', image: 'module-css'},
                {name: 'Link Building ', image: 'bootstrap'},
                {name: 'Technical Audits', image: 'bem'},
            ]
        },
        backend: {
            title: 'Back&OtherStack',
            description: '6+ Years Experience',
            items: [
                {name: 'PHP', image: 'php'},
                {name: 'MySQL', image: 'mysql'},
                {name: 'ООP/MVC/SOLID/DRY/KIS', image: 'patterns'},
                {name: 'Composer', image: 'composer'},
                {name: 'Apache/Nginx', image: 'apache'},
                {
                    name: 'Jooomla/Wordpress \n' +
                        '& 15+ CMS Exp.', image: 'cms'
                },
            ]
        },
        design: {
            title: 'Design',
            description: '15+ Years Experience',
            items: [
                {name: 'Photoshop', image: 'photoshop'},
                {name: 'AdobeXD', image: 'xd'},
                {name: 'Figma', image: 'figma'},
                {name: 'CorelDraw', image: 'corel'},
                {name: 'Adobe Illustr.', image: 'ai'},
            ]
        },
    },
    // My works
    works: [
        {
            id: v4(),
            type: 'php, design',
            name: 'seoplane',
            title: 'SeoPlane - SEO-project management system',
            desc: `SeoPlane is a multifunctional system for managing seo-projects, tasks, which allows you to streamline
             and automate business processes using a unique modules (e.g. seo-radar) and integrations with third-party services.`,
            stack: [
                'PHP',
                'MVC',
                'Javascript',
                'Bootstrap',
                'CURL',
                'Others',
                'Adobe XD',
                'Figma',
            ],
            links: {
                demo: 'https://seoplane.3admitry.com',
            },
            featured: true,
        },
        {
            id: v4(),
            type: 'react',
            name: 'todolist',
            title: 'React Todolist',
            desc: 'Awesome todolist with a pretty design App in which you can create a list of your tasks. You can add, ' +
                'change, delete your names Powered by API from samuraijs.com, all your data is stored on the server',
            stack: [
                'React',
                'Redux/Thunk',
                'TypeScript',
                'StoryBook',
                'Unit tests',
                'Integration tests',
                'Formik',
                'MUI',
                'SASS',
            ],
            links: {
                git: 'https://github.com/3admitry/react-todolist',
                demo: 'https://3admitry.github.io/react-todolist',
            },
            featured: true,
        },
        {
            id: v4(),
            type: 'react',
            name: 'network',
            title: 'React Social Network',
            desc: `A tiny social network that demonstrates the main features of the React application paired with Redux state management 
                You can sign in (using validation and captcha), make changes to your profile information, status, add posts. There are over 20,000 active users`,
            stack: [
                'React',
                'Redux/Thunk',
                'React-router-dom',
                'Unit tests',
                'React-hook-form',
                'Ant design',
                'SASS',
            ],
            links: {
                git: 'https://github.com/3admitry/react-social-network',
                demo: 'https://3admitry.github.io/react-social-network',
            },
            featured: true,
        },

        {
            id: v4(),
            type: 'speeches',
            name: 'video',
            title: 'How to attract new customers with the Google and Yandex: SEO and PPC - Zagluhinsky Dmitry ',
            desc: `1С-Bitrix: Business automation in the cloud, Belarus, Brest, 2017`,
            stack: [
                'Soft skill, Conference, Presentation, Video',
            ],
            links: {
                demo: 'https://www.youtube.com/watch?v=mRVgFsPizAo'
            },
            featured: true,
        },

        {
            id: v4(), type: 'php, design', name: 'fortress', title: 'Brest Fortress',
            desc: `Development of a website for the Memorial Complex Brest-Fortress Hero with a system for buying and 
            paying for tickets to visit museums on the territory of the complex. Development of a unique design and website`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'Joomla 3.9',
                'Virturemart',
                'HTML/SCSS',
                'Javascript',
                'Adobe XD',
                'Adobe PhotoShop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            links: {
                demo: 'https://brest-fortress.by/',
            },
            featured: true,
        },

        {
            id: v4(), type: 'php, design', name: 'motoplanet', title: 'Motoplanet',
            desc: `The largest online store selling motorcycle equipment and accessories in Belarus. The task was to 
            develop a corporate redesign and build a site on a modern fast engine. Also transfer of all old information 
            to the new site`,
            stack: [
                'PHP',
                'Opencart',
                'Self-written modules',
                'Bootstrap',
                'HTML/SCSS',
                'Javascript',
                'Adobe XD',
            ],
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            links: {
                demo: 'https://motoplanet.by/',
            },
            featured: true,
        },
        {
            id: v4(), type: 'php', name: 'family', title: 'Zagluhinsky Genealogy',
            desc: `This web application is the result of my passion for the genealogy of my family and our surname. 
            The application is developed on the MVC pattern, in other words, a mini framework that was developed as 
            part of the SeoPlane project`,
            stack: [
                'PHP',
                'MVC',
                'Javascript',
                'HTML/CSS',
                'Bootstrap',
                'Others libs',
            ],
            links: {
                demo: 'http://genealogy.3admitry.com/',
            },
            featured: false,
        },

        {
            id: v4(), type: 'react', name: 'counter', title: 'React Counter',
            desc: `Training React application for mastering the practice of working with TypeScript, React-Redux and Local Storage`,
            stack: [
                'Functional React',
                'Redux',
                'TypeScript',
                'Local Storage',
                'Module CSS',
            ],
            links: {
                git: 'https://github.com/3admitry/react-counter/tree/main',
                demo: 'https://3admitry.github.io/react-counter/',
            },
            featured: false,
        },

        {
            id: v4(),
            type: 'react',
            name: 'tic-tac-toe',
            title: 'React Tic-Tac-Toe',
            desc: `Basic application from the official React documentation, practicing the principles of working with React`,
            stack: [
                'React',
                'TypeScript',
                'Module CSS',
            ],
            links: {
                git: 'https://github.com/3admitry/react-tic-tac-toe',
                demo: 'https://3admitry.github.io/react-tic-tac-toe/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'react', name: 'chat', title: 'React Websocket Chat',
            desc: `Basic Create React App which practices web socket works`,
            stack: [
                'React',
                'TypeScript',
                'Module CSS',
            ],
            links: {
                git: 'https://github.com/3admitry/react-chat-websocket',
                demo: 'https://3admitry.github.io/react-chat-websocket/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'seoclick', title: 'SeoClick - digital-agency',
            desc: `Personal website of the digital-agency SeoClick, which provides services for the development and promotion of websites`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'Joomla 3.9',
                'HTML/SCSS',
                'Javascript',
                'Adobe XD',
                'Adobe PhotoShop',
            ],
            images: [1, 2, 3, 4, 5, 6],
            links: {
                demo: 'https://seoclick.by/',
            },
            featured: true,
        },
        {
            id: v4(), type: 'php', name: 'retina', title: 'Retina - eye clinic',
            desc: `Makarchuk Eye Microsurgery Center is a private ophthalmological clinic, the main directions of which 
            are thorough diagnostics and surgical treatment of eye diseases according to the latest international standards.`,
            stack: [
                'PHP',
                'WordPress',
                'HTML/SCSS',
                'Javascript',
            ],
            links: {
                demo: 'https://retina.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php', name: 'novamed', title: 'NovaMed',
            desc: `NOVAMED is a unique multidisciplinary medical center that provides a wide range of medical services 
            and the ability to solve most health problems with the help of experienced doctors`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'HTML/SCSS',
                'Javascript',
                'Joomla 3.6',
            ],
            links: {
                demo: 'https://7703.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'patriot', title: 'PatriotStroy',
            desc: `The Patriot Stroy company is engaged in sale, installation and service of plastic.
            What has been done - a large unique redesign of the entire site, layout and minimization of SEO risks`,
            stack: [
                'PHP',
                'Bitrix',
                'HTML/SCSS',
                'Javascript',
                'Adobe XD',
            ],
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,],
            links: {
                demo: 'https://patriotstroy.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php', name: 'jardan', title: 'Jardan',
            desc: `One of the largest local online stores selling flowers and flower arrangements`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'HTML/SCSS',
                'Javascript',
                'Joomla 3.7',
                'Virturemart',
            ],
            links: {
                demo: 'https://jardan.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'design', name: 'metallan', title: 'Redesign website sale of rolled metal ',
            desc: `Metallan sells the widest range of rolled metal products and related products. Fittings, 
            pipes of round, rectangular and square section, steel circles, sheets, strip, square, corners, channels, 
            I-beams, hexagons are constantly available.`,
            stack: [
                'Adobe XD',
            ],
            images: [1, 2, 3],
            featured: false,
        },
        {
            id: v4(), type: 'design', name: 'apple', title: 'Apple re:Store',
            desc: `Pet design project for Apple re:Store`,
            stack: [
                'Adobe XD',
            ],
            images: [1, 2, 3],
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'belsharm', title: 'BelSharm',
            desc: `The BelSharm company is a online store that offers knitwear from Belarusian manufacturers wholesale and retail.`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'HTML/SCSS',
                'Javascript',
                'Joomla 3.6',
                'Adobe XD',
            ],
            images: [1, 2, 3],
            links: {
                demo: 'https://motoplanet.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'dosaaf', title: 'Driving school',
            desc: `DOSAAF is a driving school that provides training (retraining) for drivers of motor vehicles of 
            all categories.`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'HTML/SCSS',
                'Joomla 3.8',
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7,],
            links: {
                demo: 'http://avtoshkola.brest.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'gorodfm', title: 'GorodFM - radio station',
            desc: `A small radio station in the city of Brest, which is accentuated by nostalgic compositions`,
            stack: [
                'PHP',
                'Javascript',
                'Framework-Gantry',
                'HTML/SCSS',
                'Joomla 3.5',
                'Adobe XD',
            ],
            images: [1],
            links: {
                demo: 'https://gorodfm.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'checkauto', title: 'CheckAuto',
            desc: `The company "CheckAuto" - services for complex diagnostics of a car before purchase.`,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
                'PHP',
                'Joomla 3.4',
                'Framework-Gantry',
                'HTML/SCSS',
            ],
            images: [1, 2],
            links: {
                demo: 'https://gorodfm.by/',
            },
            featured: false,
        },

        {
            id: v4(), type: 'design', name: 'eauto', title: 'Cars from the USA',
            desc: `Design project for a small car delivery company from Europe and the USA`,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1],
            featured: false,
        },
        {
            id: v4(), type: 'design', name: 'iststroy', title: 'IstStroy - roof installation',
            desc: `Design project for a roofing company and related services`,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7],
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'shelcoprint', title: 'ShelcoPrint - printed products',
            desc: `The company specializes in the production of printed products such as: business cards, labels, 
            postcards, folders, stickers, electronic device dashboards, packaging boxes, kraft bags, etc.`,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
                'PHP',
                'Joomla 3.9',
                'Framework-Gantry',
                'HTML/SCSS',
            ],
            images: [1, 2, 3, 4, 5, 6, 7],
            links: {
                demo: 'https://shelcoprint.by/',
            },
            featured: false,
        },

        {
            id: v4(), type: 'php', name: 'ravt', title: 'Ravt - curtains for cars',
            desc: `RAVT is a company that manufactures car curtains for any vehicle`,
            stack: [
                'PHP',
                'Joomla 3.4',
                'Framework-Gantry',
                'HTML/SCSS',
            ],
            links: {
                demo: 'http://ravt.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'design', name: 'prgrup', title: 'PRgrup - building company',
            desc: `Вesign project for a large construction company who wanted a unique and modern design`,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            featured: false,
        },
        {
            id: v4(), type: 'php, design', name: 'bve', title: 'BVE - ventilation systems',
            desc: `BVEfans is engaged in the supply of ventilation equipment for agricultural, general 
            industrial and special purposes from leading manufacturers.`,
            stack: [
                'PHP',
                'HTML/SCSS',
                'Framework-Gantry',
                'Joomla 3.6',
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7,],
            links: {
                demo: 'http://bvefans.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'php', name: 'zvezdastom', title: 'ZvezdaStom - dental clinic',
            desc: `Dentistry "Zvezda-STOM" is a team of qualified dentists, orthopedists and surgeons, middle and junior
             medical staff with extensive work experience, who are responsible for the treatment of their patients, 
             focused on providing the highest possible professional assistance.`,
            stack: [
                'PHP',
                'Framework-Gantry',
                'HTML/SCSS',
                'Joomla 3.7',
                'Adobe XD',
                'Adobe Photoshop',
            ],
            links: {
                demo: 'https://zvezdastom.by/',
            },
            featured: false,
        },
        {
            id: v4(), type: 'design', name: 'rgtf', title: 'RGTF - online store tulle',
            desc: `RGTF - Romny Curtain and Tulle Factory For more than 50 years, Romenskaya Curtain and Tulle Factory 
            has been cognizing the mysterious beauty of window decoration, bringing comfort and harmony to the homes and 
            apartments of its customers. Today, Romny curtain-tulle factory is the only manufacturer of curtain-tulle fabrics in Ukraine. `,
            stack: [
                'Adobe XD',
            ],
            images: [1, 2, 3, 4, 5, 6,],
            featured: false,
        },
    ]
}

export type RootStateType = typeof state;