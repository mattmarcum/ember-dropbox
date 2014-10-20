import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route( 'dropbox-login' );
    this.route( 'dropbox-account' );
    this.route( 'dropbox-metadata' );
    this.route( 'dropbox-logout' );
});

export default Router;
