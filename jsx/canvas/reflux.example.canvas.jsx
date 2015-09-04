define(function (require) {

    var React = require('react');
    var Reflux = require('reflux');
    var DemoStore = require('app/stores/demo.store');
    var DemoActions = require('app/actions/demo.actions');

    return React.createClass({

        mixins: [
            Reflux.listenTo(DemoStore,"onStoreChange"),
            React.addons.LinkedStateMixin // use two way binding
        ],

        onStoreChange : function(items){
            this.setState({items: items});
        },

        getInitialState : function(){
            return {items: [], itemText : ""};
        },

        componentDidMount: function () {
        },

        mountItemList: function () {
            return this.state.items.map(function (item, index) {
                return (
                    <a className="list-group-item" key={index}>
                        <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true"
                              onClick={DemoActions.removeItem.bind(null, index)}/><h4
                        className="list-group-item-heading">{item.text}</h4>
                    </a>
                )
            });
        },

        addItem : function(event){
            var itemText = this.state.itemText.trim();
            if(itemText.length > 0){
                DemoActions.addItem({text : itemText});
                this.state.itemText = "";  // possible due to two-way-binding
            }
        },

        render: function () {

            return (
                <div>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6">
                            <h2>Example of Reflux</h2>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="panel-body">
                            <div className="input-group">
                                <input ref="itemTextInput" type="text" className="form-control" placeholder="Enter Item Text..." valueLink={this.linkState("itemText")}/>
                              <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this.addItem}>Add Item</button>
                              </span>
                            </div>
                        </div>
                        <div className="list-group">
                            {this.mountItemList()}
                        </div>
                    </div>
                </div>
            )
        }
    })
});
