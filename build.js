// build configuration for requirejs optimizer
{
    appDir: './',
    baseUrl: './',
    skipDirOptimize: true,
    removeCombined: true,
    optimizeCss: 'standard',
    paths: {
        app: 'js/app',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        q: 'node_modules/q/q',
        react: 'node_modules/react/dist/react-with-addons.min', // release version
        reactrouter: 'node_modules/react-router/umd/ReactRouter.min',
        restservice: 'js/rest-services',
        component: 'js/views/components',
        common: 'js/app/common',
        eventemitter: 'node_modules/wolfy87-eventemitter/EventEmitter.min',
        jquery: 'node_modules/jquery/dist/jquery.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'reactrouter': {
            deps: ['react'],
            exports: 'ReactRouter'
        }
    },
    dir: './release-build',
    modules: [
        {
            //module names are relative to baseUrl
            name: 'app/common',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: [
                'jquery',
                'bootstrap',
                'react',
                'q',
                'common/http',
                'common/messagehandler',
                'common/event',
                'common/router',
                'app/config',
                'restservice/auth.service'
            ]
        },
        {
            //module names are relative to baseUrl/paths config
            name: 'app/login',
            exclude: ['app/common'],
            include: [
                'app/login'
            ]

        },
        {
            //module names are relative to baseUrl/paths config
            name: 'app/main',
            exclude: ['app/common'],
            include: [
                'app/main'
            ]

        }
    ]
};
