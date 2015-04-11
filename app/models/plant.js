import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    planting: DS.attr('string'),
    pests: DS.attr('string'),
    blooming: DS.attr('string'),
    fertilization: DS.attr('string'),
    speciesName: DS.attr('string'),
    latinName: DS.attr('string'),
    hardinessZoneMin: DS.attr('number'),
    temperatureMax: DS.attr('number'),
    temperatureMin: DS.attr('number'),
    fertilize: DS.attr('number'),
    sun: DS.attr('number'),
    water: DS.attr('number'),
    seasons: DS.attr(),
    profiles: DS.hasMany('profile')
});
