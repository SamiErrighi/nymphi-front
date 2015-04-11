import Ember from 'ember';

export default Ember.Component.extend({
    action: 'clickPlant',
    tagName: 'li',
    click: function(e) {
        this.sendAction('action', this.get('plant'))
         Em.$('.auto-input').val(this.get('plant.name'))
         Em.$('.list-auto').hide();
    }
});
