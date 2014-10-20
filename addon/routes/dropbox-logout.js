import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        'dropbox-logout': function(){
            var self = this,
                token = window.localStorage.dropboxToken;

            Ember.$.ajax({
                url: 'https://api.dropbox.com/1/disable_access_token',
                headers: {
                    'Authorization':'Bearer '+token
                }
            }).then(function(){
                delete window.localStorage.dropboxToken;
                self.transitionTo('/');
            });
        }
    }
});

