import Ember from 'ember';
import DropboxOauth2 from 'ember-dropbox/routes/dropbox-oauth2';

export default DropboxOauth2.extend({  
    redirectSetup: function(){
        var self = this;
        self.on( 'auth', function(){
            Ember.run(function(){
                self.transitionTo( 'dropbox-account' );
            });
        }); 
    }.on('init')
});
