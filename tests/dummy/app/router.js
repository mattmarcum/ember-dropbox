import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route( 'dropbox-oauth2' );
    this.route( 'dropbox-account' );
});

export default Router;
