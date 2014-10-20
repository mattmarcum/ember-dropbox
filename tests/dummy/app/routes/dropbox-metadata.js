import DropboxProtectedRoute from 'ember-dropbox/routes/dropbox-protected';

export default DropboxProtectedRoute.extend({
    model: function(){
        return this.store.find( 'dropbox-metadata').then( function( models){
            return models.get('firstObject');
        });
    }
});
