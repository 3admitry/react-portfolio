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
                {name: 'React', image: 'html'},
                {name: 'Redux', image: 'css'},
                {name: 'Redux-thunk', image: 'sass'},
                {name: 'Unit Testing', image: 'module-css'},
                {name: 'Storybook', image: 'bootstrap'},
                {name: 'Material UI & Ant Design', image: 'bem'},
            ]
        },
        js: {
            title: 'JavaScript',
            description: '3+ Years Experience',
            items: [
                {name: 'JS ES6+', image: 'html'},
                {name: 'TypeScript', image: 'html'},
                {name: 'Node.js', image: 'css'},
                {name: 'Webpack', image: 'sass'},
                {name: 'Gulp', image: 'module-css'},
                {name: 'Yarn/npm', image: 'bootstrap'},
                {name: 'Git', image: 'bem'},
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
                {name: 'PHP', image: 'html'},
                {name: 'MySQL', image: 'css'},
                {name: 'ООP/MVC/SOLID/DRY/KIS', image: 'sass'},
                {name: 'Composer', image: 'module-css'},
                {name: 'Nginx/Apache', image: 'bootstrap'},
                {
                    name: 'Jooomla/Wordpress \n' +
                        '& 15+ CMS Exp.', image: 'bem'
                },
            ]
        },
        design: {
            title: 'Design',
            description: '15+ Years Experience',
            items: [
                {name: 'Photoshop', image: 'html'},
                {name: 'AdobeXD', image: 'css'},
                {name: 'Figma', image: 'sass'},
                {name: 'CorelDraw', image: 'module-css'},
                {name: 'Adobe Illustr.', image: 'bootstrap'},
                {name: 'Sketch', image: 'bem'},
            ]
        },
    },
    work: [
        {
            id: 0,
            type: 'php',
            name: 'seoplane',
            title: 'SeoPlane - SEO-project management system',
            desc: `SeoPlane is a multifunctional system for managing seo-projects, tasks, which allows you to streamline and automate business processes using a unique modules (e.g. seo-radar) and integrations with third-party services.`,
            stack: [
                'PHP',
                'MVC',
                'Javascript',
                'Bootstrap',
                'CURL',
                'Others',
            ],
            links: {
                demo: 'https://seoplane.3admitry.com',
            }
        },
        {
            id: 1,
            type: 'react',
            name: 'todolist',
            title: 'React Todolist',
            desc: 'Awesome todolist with a pretty design App in which you can create a list of your tasks. You can add, change, delete your names Powered by API from samuraijs.com, all your data is stored on the server',
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
            }
        },
        {
            id: 2,
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
            }
        },
        {
            id: 10, type: 'php', name: 'family', title: 'Genealogy 3a',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'MVC',
                'Javascript',
                'Bootstrap',
                'CURL',
                'Others',
            ],
            links: {
                demo: 'http://genealogy.3admitry.com/',
            }
        },
        {
            id: 11, type: 'php', name: 'fortress', title: 'Brest Fortress',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Joomla',
                'React',
                'Virturemart',
                'Javascript',
            ],
            links: {
                demo: 'https://brest-fortress.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'novamed', title: 'NovaMed',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Joomla',
                'React',
                'Virturemart',
                'Javascript',
            ],
            links: {
                demo: 'https://7703.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'jardan', title: 'Jardan',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Joomla',
                'React',
                'Virturemart',
                'Javascript',
            ],
            links: {
                demo: 'https://jardan.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'motoplanet', title: 'Motoplanet',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://motoplanet.by/',
            }
        },
        {
            id: 11, type: 'php, design', name: 'belsharm', title: 'Belsharm',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            images: [1, 2, 3],
            links: {
                demo: 'https://motoplanet.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'patriot', title: 'PatriotStroy',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://patriotstroy.by/',
            }
        },
        {
            id: 11, type: 'php, design', name: 'dosaaf', title: 'Driving school',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            images: [1, 2, 3, 4, 5, 6, 7,],
            links: {
                demo: 'http://avtoshkola.brest.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'gorodfm', title: 'GorodFM - radio station',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://gorodfm.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'checkauto', title: 'CheckAuto',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://gorodfm.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'retina', title: 'Retina - eye clinic',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://retina.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'bve', title: 'BVE - ventilation systems',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'http://bvefans.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'zvezdastom', title: 'ZvezdaStom - dental clinic',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'https://zvezdastom.by/',
            }
        },
        {
            id: 11, type: 'php', name: 'ravt', title: 'Ravt - curtains for cars',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                demo: 'http://ravt.by/',
            }
        },
        {
            id: 11, type: 'react', name: 'counter', title: 'React Counter',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                git: 'https://github.com/3admitry/react-counter/tree/main',
                demo: 'https://3admitry.github.io/react-counter/',
            }
        },
        {
            id: 11, type: 'react', name: 'tic-tac-toe', title: 'React Tic-Tac-Toe',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                git: 'https://github.com/3admitry/react-tic-tac-toe',
                demo: 'https://3admitry.github.io/react-tic-tac-toe/',
            }
        },
        {
            id: 11, type: 'react', name: 'chat', title: 'React Websocket Chat',
            desc: `FamilyTree - this the webApp about genealogy of my family`,
            stack: [
                'PHP',
                'Opencart',
                'Javascript',
            ],
            links: {
                git: 'https://github.com/3admitry/react-chat-websocket',
                demo: 'https://3admitry.github.io/react-chat-websocket/',
            }
        },


        //DESIGN !!!!!!!!!
        {
            id: 4,
            type: 'design',
            name: 'belsharm',
            title: 'Belsharm',
            desc: `A light design for online store of women's clothing `,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3],

        },
        {
            id: 4,
            type: 'design',
            name: 'iststroy',
            title: 'IstStroy - roof installation',
            desc: `A light design for online store of women's clothing `,
            stack: [
                'Adobe XD',
                'Adobe Photoshop',
            ],
            images: [1, 2, 3, 4, 5, 6, 7],

        },
    ]
}

export type RootStateType = typeof state;