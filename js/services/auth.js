'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {
	
	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);

	var Auth = {
		user: {},

    createProfile: function(uid, user) {
      
    },

    getProfile: function(uid) {
      
    },

    login: function(user) {
    },

    register: function(user) {
    },

    logout: function() {
      
    },

		changePassword: function(user) {      
			
		},

    signedIn: function() {
      
    },

    requireAuth: function() {
      
    }
	};

	auth.$onAuth(function(authData) {
	});

	return Auth;	

});