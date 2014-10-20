import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: '1',
    host: 'https://api.dropbox.com',
    headers: function(){
        var token = window.localStorage.dropboxToken;
        return { 'Authorization':'Bearer '+ token};
    }.property().volatile(),
    generateIdForRecord: function(){
        return Math.random().toString(32).slice(2).substr(0, 5);
    }
});
