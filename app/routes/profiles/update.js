import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('model', this.modelFor('profiles').get('firstObject'));
        controller.set('plants', this.store.find('plant'))
    }
});
