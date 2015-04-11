import Ember from 'ember';

export default Ember.TextField.extend({
    className: ['auto-complete-input'],
    viewName: 'input',
    action: 'filter',
    value: Ember.computed.oneWay('parentView.profile.plant.name'),
    //targetObject: Ember.computed.alias('parentView'),
    keyUp: function(e) {
        Ember.$('.auto-complete-result').show();
        this.sendAction('action', this.get('value'));
    },

    didInsertElement: function() {
        return this._super();
    },
});

