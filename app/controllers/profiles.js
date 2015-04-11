import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ["plants"],
    plants: Ember.computed.alias('controllers.plants'),
    profile: Ember.computed.alias('model.firstObject')
});
