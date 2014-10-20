import Ember from 'ember';
import DropboxLoginRoute from 'ember-dropbox/routes/dropbox-login';

export default DropboxLoginRoute.extend({  
    redirectSetup: function(){
        var self = this;
        self.on( 'auth', function(){
            Ember.run(function(){
                self.transitionTo( 'dropbox-account' );
            });
        }); 
    }.on('init')
});
