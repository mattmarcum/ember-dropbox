import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizePayload: function(payload){
        payload.id=1;
        return { 
            'dropbox-account-info':[ payload ]
        };
    }
});
