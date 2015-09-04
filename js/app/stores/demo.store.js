define(function (require) {

    var Reflux = require('reflux');
    var DemoActions = require('app/actions/demo.actions');

    return Reflux.createStore({
        listenables: [DemoActions],

        items : [],

        onAddItem: function (obj) {
            this.items.push(obj);
            this.update();
        },

        onRemoveItem: function (index) {
            this.items.splice(index, 1);
            this.update();
        },

        update : function(){
            this.trigger(this.items);
        },
    });

});
