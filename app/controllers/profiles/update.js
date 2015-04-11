import Ember from 'ember';
export default Ember.Controller.extend({
    search: null,
    updated: false,

    actions: {
        submit: function() {
            var profile =  this.get('model');
            var self = this;
            profile.save().then(function(data){
                self.set('updated', true);
            });
        }
    }
});