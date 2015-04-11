import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    click: function(e) {
        this.set('parentView.profile.plant', this.get('plant'));
        this.set('parentView.input.value', this.get('plant.name'));
        Ember.$('.auto-complete-result').hide();
    }
});
