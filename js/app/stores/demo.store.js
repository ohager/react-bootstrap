define(function (require) {

    var Reflux = require('reflux');
    var DemoActions = require('app/actions/demo.actions');

    return Reflux.createStore({
        listenables: [DemoActions],

        items : [],

        onAddItem: function (obj) {
            this.items.push(obj);
            this.trigger(this.items);
        },

        onRemoveItem: function (obj) {
            console.log('remove: ' + JSON.stringify(obj));
        }
    });

});
