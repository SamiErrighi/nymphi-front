import Ember from 'ember';

export default Ember.TextField.extend({
    action: 'filter',
    value: Ember.computed.oneWay('parentView.profile.plant.name'),
    //targetObject: Ember.computed.alias('parentView'),
    keyUp: function(e) {
        Em.$('.list-auto').show();
        this.sendAction('action', this.get('value'));
    },

    didInsertElement: function() {
        return this._super();
    },
});

