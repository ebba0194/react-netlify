import * as logos from './logos';

export const projectData = [
    {
        title: 'RMG Media',
        url: 'https://www.rmgmedia.com/',
        content: '<p>This is RMG\'s own website. It was my initial project with the company, and my focus over the course of my internship. </p>' +
            '<p>As a digital agency, we needed a really beautiful, snappy website to show to clients. We chose a bleeding-edge tech stack and ' +
            'created our own best practices as we went, ' +
            'utilizing a variety of technologies, including: ' +
            '<ul>' +
            '<li><strong>Reactjs</strong></li>' +
            '<li><strong>Redux (with Immutablejs)</strong></li>' +
            '<li><strong>React-Router</strong></li>' +
            '<li><strong>GSAP animation library</strong></li>' +
            '</ul>',
        img: '/RMG.png',
        logos: [
            { component: logos.ReactLogo},
            { component: logos.ReduxLogo},
            { component: logos.BootstrapLogo},
            { component: logos.DockerLogo},
            { component: logos.InvisionLogo},
        ]
    },
    {
        title: 'Beekman 1802',
        url: 'https://beekman1802.com/',
        content: '<p>Beekman 1802 is a lifestyle brand based on a goat farm in upstate new York. They wanted a site that was simple to manage,' +
            ' and yet highly customized. They chose Shopify, a platform used by many high-profile brands, such as Kylie Cosmetics. </p>' +
            '<p>I learned Shopify\'s custom templating language, liquid, over the course of this project. The Ruby-like syntax was a departure ' +
            'from my previous experience, but integrating custom code with Shopify\'s page builder was very cool; the users could end up making their ' +
            'own design changes based from our templates. We used a combination of technologies: </p>' +
            '<ul>' +
            '<li><strong>Bootstrap</strong></li>' +
            '<li><strong>JQuery</strong></li>' +
            '<li><strong>Sass</strong></li>' +
            '<li><strong>Liquid</strong></li>' +
            '</ul>',
        img: '/Beekman.png',
        logos: [
            { component: logos.ShopifyLogo},
            { component: logos.BootstrapLogo},
            { component: logos.SassLogo},
            { component: logos.JQueryLogo}
        ]
    },
    {
        title: 'Anova Furnishings',
        url: 'https://www.anovafurnishings.com/',
        content: '<p>Anova Furnishings is a commercial outdoor furniture company based in Missouri. They had an existing site, ' +
            'but it was in an outdated version of Magento and in serious need of a performance upgrade. ' +
            'We brought them current on their Magento version - and while we were at it, we created a fully custom React front end to sit on top' +
            ' of the new back end.</p>' +
            '<p>We incorporated some new technologies to hook this front end up to Magento. I learned how to utilize Graphql ' +
            'to fetch data for our custom components, and some techniques for efficiently sharing data throughout a larger, more complicated web app. ' +
            'It was also necessary to use virtualization to create a local version of the Magento admin panel to use during testing. ' +
            'We used many of the technologies I was already familiar with, but some new ones as well: ' +
            '</p>' +
            '<ul>' +
            '<li><strong>React</strong></li>' +
            '<li><strong>Redux</strong></li>' +
            '<li><strong>Bootstrap</strong></li>' +
            '<li><strong>Magento</strong></li>' +
            '<li><strong>Docker</strong></li>' +
            '<li><strong>Graphql and Apollo</strong></li>' +
            '</ul>',
        img: '/Anova.png',
        logos: [
            { component: logos.ReactLogo},
            { component: logos.ReduxLogo},
            { component: logos.BootstrapLogo},
            { component: logos.MagentoLogo},
            { component: logos.DockerLogo},
            { component: logos.GraphqlLogo},
            { component: logos.ApolloGraphqlLogo},
            { component: logos.CSS3Logo}
        ]
    },
    {
        title: 'Hanky Panky',
        url: 'https://www.hankypanky.com/',
        content: '<p>Hanky Panky is an older, established lingerie brand - and their outdated Magento website was showing it\'s age. We gave their site an upgrade ' +
            'and a spiffy new React front end as well. This was quite a complicated site; they have their own reward points system, a large catalog of products, and they' +
            ' used Magento\'s Pagebuilder throughout  to manage their frequently updated messaging and content. </p>' +
            '<p>We introduced Styled Components to our best practices in this project, and also refined further some thoughts ' +
            'around code organization and SEO. This project was ideal to really identify and address pain points around scaling a react app to a larger, more complicated implementation ' +
            'while keeping up performance benchmarks. I fell in love with CSS-in-JS and can\'t envision ever going back.</p>' +
            '<p>Some of the technologies used: </p>' +
            '<ul>' +
            '<li><strong>React</strong></li>' +
            '<li><strong>Redux</strong></li>' +
            '<li><strong>Bootstrap</strong></li>' +
            '<li><strong>Magento</strong></li>' +
            '<li><strong>Docker</strong></li>' +
            '<li><strong>Graphql and Apollo</strong></li>' +
            '<li><strong>Styled Components</strong></li>' +
            '</ul>',
        img: 'hanky.png',
        logos: [
            { component: logos.ReactLogo },
            { component: logos.ReduxLogo},
            { component: logos.BootstrapLogo},
            { component: logos.MagentoLogo},
            { component: logos.DockerLogo},
            { component: logos.GraphqlLogo},
            { component: logos.ApolloGraphqlLogo},
            { component: logos.StyledLogo}
        ]
    },
    // {
    //     title: 'Lobstergram - Under Construction',
    //     url: 'https://www.lobstergram.com',
    //     content: '<p>This site is still under construction</p>',
    //     img: '/lobstergram.png',
    //     logos: [
    //         { component: logos.WebpackLogo},
    //         { component: logos.ReactLogo},
    //         { component: logos.ReduxLogo},
    //         { component: logos.BootstrapLogo},
    //         { component: logos.MagentoLogo},
    //         { component: logos.DockerLogo},
    //         { component: logos.GraphqlLogo},
    //         { component: logos.StyledLogo}
    //     ]
    // }
];
