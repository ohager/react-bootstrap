define(function (require) {

    var React = require('react');
    var Reflux = require('reflux');
    var DemoStore = require('app/stores/demo.store');
    var DemoActions = require('app/actions/demo.actions');

    return React.createClass({

        mixins: [Reflux.listenTo(DemoStore,"onStoreChange")],

        onStoreChange : function(items){
            this.setState({items: items});
        },

        getInitialState : function(){
            return {items: []};
        },

        componentDidMount: function () {
            setTimeout( function(){
                DemoActions.addItem({name: "One Item"});
            }, 2000);
        },

        createItemList: function () {
            return this.state.items.map(function (item, index) {
                return <li key={index}>{item.name}</li>;
            });
        },

        render: function () {

            return (
                <div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6">
                            <h2>Example of using Reflux</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <ul>
                            {this.createItemList()}
                        </ul>
                    </div>
                </div>
            )
        }
    })
});
