import DS from 'ember-data';

export default DS.Model.extend({
    path: DS.attr('string'),
    is_dir: DS.attr('boolean'),
    size: DS.attr('string'),
    'dropbox-metadata': DS.hasMany('dropbox-metadata')
}); 
