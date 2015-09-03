define(function(require){

        var React = require('react');
        var AuthService = require('restservice/auth.service');
        var $auth = require('common/auth');
        var $routes = require('common/routes');

        return React.createClass({

            credentials : { },

            getInitialState: function () {
                return {login : ''};
            },

            componentDidMount: function(){
                document.getElementById('username').focus();
            },

            update : function(event){
                this.credentials[event.target.id] =  event.target.value ;
                this.setState( {login : ''} );
            },

            login: function (event) {
                var authService = new AuthService();
                var that = this;
                authService.login(this.credentials.username, this.credentials.password).then(function (token) {
                    $auth.setAuthToken(token);
                    $routes.gotoStartPage();
                }).catch(function () {
                    that.setState( {login : "Login failed"} );
                })
            },

            render: function () {
                return (
                    <form id="login">
                        <small>&nbsp;{this.state.login}</small>
                        <input id="username" type="text" placeholder="username" onChange={this.update}/>
                        <br/>
                        <input id="password" type="password" placeholder="password" onChange={this.update}/>
                        <br/>
                        <div className="wrapper">
                            <span className="group-btn">
                                <a href="#" className="btn btn-primary btn-md" onClick={this.login}>Login&nbsp;
                                    <i className="glyphicon glyphicon-off"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                );
            }
        });
    }
);