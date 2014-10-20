import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: '1',
    host: 'https://api.dropbox.com',
    headers: function(){
        var token = window.dropboxToken;
        return { 'Authorization':'Bearer '+ token};
    }.property().volatile()
});
