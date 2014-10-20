import Ember from 'ember';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');
    Ember.Inflector.inflector.irregular('metadata','metadata');
};

export default {
  name: 'ember-dropbox',
  initialize: initialize
};
