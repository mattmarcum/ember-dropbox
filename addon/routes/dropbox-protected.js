import Ember from 'ember';

export default Ember.Route.extend( {
    beforeModel: function(){
        if( ! window.localStorage.dropboxToken ){
            this.transitionTo( 'dropbox-login' );
        }
    }
} );
