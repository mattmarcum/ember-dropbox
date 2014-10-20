import DBA from './dropbox';

export default DBA.extend({
    pathForType: function( type ){
        return 'account/info';
    }
});
