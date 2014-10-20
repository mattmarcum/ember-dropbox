import DS from 'ember-data';

export default DS.Model.extend({
    referal_link: DS.attr( 'string' ),
    country: DS.attr( 'string' ),
    display_name: DS.attr( 'string' ),
    email: DS.attr( 'string' ),
    email_verified: DS.attr( 'boolean' ),
    team: DS.attr( 'string' ),
    uid: DS.attr( 'string' )  
});
