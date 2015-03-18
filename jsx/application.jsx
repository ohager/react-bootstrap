define(['react',
		'reactrouter',
		'common/event',
		'component/header',
		'component/footer',
		'component/notification',
		'component/canvas/twoway.example.canvas',
        'component/canvas/notification.example.canvas',
        'component/canvas/thousands.example.canvas'
	],

	function (React, Router, $event, Header, Footer, Notification, TwoWayExampleCanvas, NotificationExampleCanvas, ThousandsExampleCanvas) {

	var RouteHandler = Router.RouteHandler;
	var Route = Router.Route;
	var DefaultRoute = Router.DefaultRoute;

	var Application = React.createClass({

		componentDidMount : function(){
		},

		render: function () {
            return (
                <div>
                    <Header/>
                    <div className="container">
                        <div className="row">
                            <Notification />
                        </div>
                        <div className="row">
                            <RouteHandler/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )

		}
	});

	var routes = (
		<Route name='app' path='/' handler={Application}>
			<Route name='twoway' path='example/twoway' handler={TwoWayExampleCanvas}/>
            <Route name='notification' path='example/notification' handler={NotificationExampleCanvas}/>
            <Route name='thousands' path='example/1000' handler={ThousandsExampleCanvas}/>
			<DefaultRoute handler={TwoWayExampleCanvas}/>
		</Route>
	);

	return {
		start: function () {
			Router.run(routes, function (Handler) {
				React.render(<Handler/>, document.body);
			});
		}
	}

});