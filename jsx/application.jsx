define(function (require) {

    var React = require('react');
    var Router = require('reactrouter');
    var Header = require('component/header');
    var Footer = require('component/footer');
    var Notification = require('component/notification');
    var TwoWayExampleCanvas = require('component/canvas/twoway.example.canvas');
    var NotificationExampleCanvas = require('component/canvas/notification.example.canvas');
    var ThousandsExampleCanvas = require('component/canvas/thousands.example.canvas');
    var CompositionExampleCanvas = require('component/canvas/composition.example.canvas');
    var DecoupledCompositionExampleCanvas = require('component/canvas/decoupledcomposition.example.canvas');
    var RefluxExampleCanvas = require('component/canvas/reflux.example.canvas');
    var RouteHandler = Router.RouteHandler;
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;


    var Application = React.createClass({

        componentDidMount: function () {
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
            <Route name='composition' path='example/composition' handler={CompositionExampleCanvas}/>
            <Route name='decoupledcomposition' path='example/composition/decoupled'
                   handler={DecoupledCompositionExampleCanvas}/>
            <Route name='reflux' path='example/reflux' handler={RefluxExampleCanvas}/>
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