import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload){
        var entries = [];
        payload.id=payload.rev || 1;
        entries.push( payload );
        if( payload.contents ){
            if( ! Ember.isArray( payload['dropbox-metadata'] ) ){
                payload['dropbox-metadata']=[];
            }
            payload.contents.forEach( function(content){
                content.id=content.rev;
                payload['dropbox-metadata'].push( content.id );
            });
            entries.pushObjects( payload.contents );
            delete payload.contents;
        }
        console.log(entries);
        return { 
            'dropbox-metadata': entries
        };
    }
});
