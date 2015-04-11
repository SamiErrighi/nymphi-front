import Ember from 'ember';
export default Ember.Controller.extend({
    search: null,
    updated: false,
    filterPlant: function() {
    }.observes('search'),

    actions: {
        filterPlant: function(value) {
            this.set('search', value);
        },

        submit: function() {
            var profile =  this.get('profile');
            var self = this;
            profile.save().then(function(data){
                self.set('updated', true);
            });
        }
    }
});