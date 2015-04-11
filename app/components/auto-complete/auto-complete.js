import Ember from 'ember';

export default Ember.Component.extend({
    search: null,
    actions: {
        filter: function(value) {
            this.set('search', value);
        },
        clickPlant: function(plant) {
            Em.$('#input-auto').val(plant.get('name'))
            this.set('profile.plant', plant)
        }
    },

    filterPlant: function() {
        if (!this.get('search'))
            return this.get('plants');
        self = this;
        return this.get('plants').filter(function(item){
            return item.get('name').match(self.get('search'))
        }); 
    }.property('search')
});
