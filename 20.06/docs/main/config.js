function createConfig() {
    return {
        home: "docs/about/01_overview",
        release: "14.1.2-0-0-SNAPSHOT",
        releases: [
            "14.1.2-0-0-SNAPSHOT"
        ],
        pathColors: {
            "*": "blue-grey"
        },
        theme: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
        },
        navTitle: 'Oracle Coherence',
        navIcon: null,
        navLogo: 'docs/images/oracle-coherence.svg'
    };
}

function createRoutes(){
    return [
        {
            path: '/docs/about/01_overview',
            meta: {
                h1: 'Overview',
                title: 'Overview',
                h1Prefix: null,
                description: 'Oracle Coherence documentation',
                keywords: 'coherence, java, documentation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('docs-about-01_overview', '/docs/about/01_overview', {})
        },
        {
            path: '/docs/about/02_introduction',
            meta: {
                h1: 'Introduction',
                title: 'Introduction',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('docs-about-02_introduction', '/docs/about/02_introduction', {})
        },
        {
            path: '/docs/about/03_quickstart',
            meta: {
                h1: 'Quick Start',
                title: 'Quick Start',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('docs-about-03_quickstart', '/docs/about/03_quickstart', {})
        },
        {
            path: '/coherence-cdi/README',
            meta: {
                h1: 'Coherence CDI',
                title: 'Coherence CDI',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-cdi-README', '/coherence-cdi/README', {})
        },
        {
            path: '/coherence-mp/README',
            meta: {
                h1: 'Coherence MP',
                title: 'Coherence MP',
                h1Prefix: null,
                description: 'Oracle Coherence documentation',
                keywords: 'coherence, java, documentation',
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-mp-README', '/coherence-mp/README', {})
        },
        {
            path: '/coherence-mp/config/README',
            meta: {
                h1: 'Coherence MicroProfile Config',
                title: 'Coherence MicroProfile Config',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-mp-config-README', '/coherence-mp/config/README', {})
        },
        {
            path: '/coherence-mp/metrics/README',
            meta: {
                h1: 'Coherence MicroProfile Metrics',
                title: 'Coherence MicroProfile Metrics',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-mp-metrics-README', '/coherence-mp/metrics/README', {})
        },
        {
            path: '/coherence-grpc-proxy/README',
            meta: {
                h1: 'Coherence gRPC Server',
                title: 'Coherence gRPC Server',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-grpc-proxy-README', '/coherence-grpc-proxy/README', {})
        },
        {
            path: '/coherence-grpc-proxy-client/README',
            meta: {
                h1: 'Coherence gRPC Client',
                title: 'Coherence gRPC Client',
                h1Prefix: null,
                description: null,
                keywords: null,
                customLayout: null,
                hasNav: true
            },
            component: loadPage('coherence-grpc-proxy-client-README', '/coherence-grpc-proxy-client/README', {})
        },
        {
            path: '/', redirect: '/docs/about/01_overview'
        },
        {
            path: '*', redirect: '/'
        }
    ];
}

function createNav(){
    return [
        { header: 'Core documentation' },
        {
            title: 'About',
            action: 'assistant',
            group: '/about',
            items: [
                { href: '/docs/about/01_overview', title: 'Overview' },
                { href: '/docs/about/02_introduction', title: 'Introduction' },
                { href: '/docs/about/03_quickstart', title: 'Quick Start' }
            ]
        },
        {
            title: 'CDI',
            action: 'extension',
            group: '/coherence-cdi',
            items: [
                { href: '/coherence-cdi/README', title: 'Coherence CDI' }
            ]
        },
        {
            title: 'Microprofile',
            action: 'widgets',
            group: '/coherence-mp',
            items: [
                { href: '/coherence-mp/README', title: 'Coherence MP' },
                { href: '/coherence-mp/config/README', title: 'Coherence MicroProfile Config' },
                { href: '/coherence-mp/metrics/README', title: 'Coherence MicroProfile Metrics' }
            ]
        },
        {
            title: 'Coherence gRPC',
            action: 'settings_ethernet',
            group: '/coherence-grpc-proxy',
            items: [
                { href: '/coherence-grpc-proxy/README', title: 'Coherence gRPC Server' },
                { href: '/coherence-grpc-proxy-client/README', title: 'Coherence gRPC Client' }
            ]
        },
        { divider: true },
        { header: 'Additional resources' },
        {
            title: 'Slack',
            action: 'fa-slack',
            href: 'https://join.slack.com/t/oraclecoherence/shared_invite/enQtNzcxNTQwMTAzNjE4LTJkZWI5ZDkzNGEzOTllZDgwZDU3NGM2YjY5YWYwMzM3ODdkNTU2NmNmNDFhOWIxMDZlNjg2MzE3NmMxZWMxMWE',
            target: '_blank'
        },
        {
            title: 'Coherence Community',
            action: 'people',
            href: 'https://coherence.java.net',
            target: '_blank'
        },
        {
            title: 'GitHub',
            action: 'fa-github-square',
            href: 'https://github.com/oracle/coherence',
            target: '_blank'
        }
    ];
}