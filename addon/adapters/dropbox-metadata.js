import DBA from './dropbox';
import Ember from 'ember';

Ember.Inflector.inflector.irregular('metadata','metadata');

export default DBA.extend({
    
    pathForType: function( type ){
        return 'metadata/auto/';
    }
});
