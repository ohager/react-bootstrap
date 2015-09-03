define(function (require) {

    var React = require('react');
    var $event = require('common/event');

    return React.createClass({

        getInitialState: function () {
            return {isLoading: false};
        },

        componentDidMount: function () {
            $event.addListener('loading-started', this.showLoadingIcon);
            $event.addListener('loading-finished', this.hideLoadingIcon);
        },

        componentWillUnmount: function () {
            $event.removeListener('loading-started');
            $event.removeListener('loading-finished');
        },

        showLoadingIcon: function () {
            if (this.isMounted()) {
                this.setState({isLoading: true});
            }
        },

        hideLoadingIcon: function () {
            if (this.isMounted()) {
                this.setState({isLoading: false});
            }
        },

        render: function () {
            return (

                <div className="loading" hidden={!this.state.isLoading}>
                    <span className="ball"></span>
                    <span className="ball-small"></span>
                </div>
            );
        }
    });
});