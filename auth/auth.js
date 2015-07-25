var ssha = require("ssha");

module.exports = function(passport, BasicStrategy,User) {
    // Estrategia de autenticación Basic
    
    var usuario;

    passport.use(new BasicStrategy(function(username, password, done) {
	User.findOne({ where: {uid: username} }).then(function(user) {
	    if (user != null) {
		if (ssha.verify(password, user.password)) {
		    return done(null,user);
		} else {
		    return done(null,false);
		}
	    } else {
		return done(null,false);
	    }
	    
	});
	
    }));
};
