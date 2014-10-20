import Ember from 'ember';

export default Ember.Route.extend( Ember.Evented, {
    cbsetup: function(){
        var self = this;

        self.on('auth', function( hash ){
            var params = parseCallback( hash );

            window.localStorage.dropboxToken = params.access_token ;
        });
  
    }.on( 'init' ),
    
    actions: {
        'dropbox-login': function(){
            var self = this,
                url = 'https://www.dropbox.com/1/oauth2/authorize?client_id='+
                EmberENV.dropbox.clientId +
                '&response_type=token&' + 
                'redirect_uri=' +
                EmberENV.dropbox.redirectURI;
            
  
            window.EmberDropbox = self;
        
            window.open(url, 'Authorize', 'height=700, width=550');
        }
    }
});

var parseCallback = function(locationHash) {
    var oauthParams = {};
    var queryString = locationHash.substring(1);
    var regex = /([^#?&=]+)=([^&]*)/g;
    var match;
    while ((match = regex.exec(queryString)) !== null) {
      oauthParams[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }
    return oauthParams;
};
