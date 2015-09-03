requirejs.config({
    baseUrl: './',
    paths: {
        app: 'js/app',
        bootstrap: 'node_modules/bootstrap/dist/js/bootstrap.min',
        q: 'node_modules/q/q',
        react: 'node_modules/react/dist/react-with-addons', // for development only
	    reactrouter: 'node_modules/react-router/umd/ReactRouter.min',
        restservice: 'js/rest-services',
        component: 'js/views/components',
        common: 'js/app/common',
        eventemitter: 'node_modules/wolfy87-eventemitter/EventEmitter.min',
        jquery : 'node_modules/jquery/dist/jquery.min'
    },

    shim: {
	    'bootstrap':{
		    deps: ['jquery']
	    },
	    'reactrouter':{
		    deps: ['react'],
		    exports: 'ReactRouter'
	    }
    }
});

require(['jquery', 'bootstrap', 'react'], function($, _b, React){

    // initial load
	window.React = React;
});