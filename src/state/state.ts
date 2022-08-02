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
                {name: 'Jooomla/Wordpress \n' +
                        '& 15+ CMS Exp.', image: 'bem'},
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
    work:[
        {
            id: 1,
            type: 'react',
            title: 'React Todolist',
            desc: 'Awesome todolist with a pretty design App in which you can create a list of your tasks. You can add, change, delete your names Powered by API from samuraijs.com, all your data is stored on the server',
            img: 'todolist',
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
            title: 'React Social Network',
            desc: `A tiny social network that demonstrates the main features of the React application paired with Redux state management 
                You can sign in (using validation and captcha), make changes to your profile information, status, add posts. There are over 20,000 active users`,
            img: 'network',
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
            id: 3,
            type: 'react',
            title: 'Social Network',
            desc: `A tiny social network that demonstrates the main features of the React application paired with Redux state management 
                You can sign in (using validation and captcha), make changes to your profile information, status, add posts. There are over 20,000 active users`,
            img: 'network',
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
                demo: 'https://3admitry.github.io/react-social-network',
            }
        },
    ]
}

export type RootStateType = typeof state;