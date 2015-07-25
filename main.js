
var express = require('express');
var namedRoutes = require('express-named-routes');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var passport = require('passport');
var BasicStrategy = require('passport-http').BasicStrategy;
var error_handling = require('./errors/error_middleware.js');

// Timezone para España y que no haya problemas con fechas
process.env.TZ = 'Europe/Madrid';

var app = exports.app =  express();
namedRoutes.extend(app);

// Conexión base datos y carga de modelos
app.set('models', require('./models'));
var User = app.get('models').User;
var auth = require('./auth/auth.js')(passport, BasicStrategy,User);

app.use(partials());

// some environment variables
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
// Proxy OpenShift
app.set('trust proxy', true);
// Redirect to https in OpenShift
app.use(function (req, res, next) {

    if ( req.headers['x-forwarded-proto'] === 'http' ) { 

        var tmp = 'https://' + req.headers.host + req.originalUrl;
        res.redirect(tmp);

    } else {

        return next();

    }

});

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json({strict: false, type: contentType}));
//app.use(bodyParser.text());

app.use(passport.initialize());

// Hacemos disponible en res.locals la función routeToPath para generar los links en las vistas
app.all('*', function(req,res,next) {
    res.locals.routeToPath = req.routeToPath;
    return next();
});

// Necesaria autenticación en todo el sitio excepto en /phpmyadmin y en /
app.all(/^(?!\/phpmyadmin|\/$)(.+)$/,passport.authenticate('basic', { session: false }), function(req,res,next) {
    return next();
});

// Routes
require('./routes/routes.js')(app);

// Parameters


// Resources
require('./resources/index')(app,passport);


// Página 404 - not found
app.use(function handleNotFound(req, res){

    var mensaje = 'No existe el recurso';
    res.status(404);

    if (req.accepts('html')) {
	res.send(mensaje);
	// res.render
	return;
    }
    if (req.accepts('json')) {
	res.send({ error: mensaje });
	return;
    }
    res.type('txt').send(mensaje);
});


// Error handling
app.use(error_handling.logErrors);
app.use(error_handling.respondError);


// Puesta en marcha
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var server = app.listen(app.get('port'), ipaddress, function(){
    console.log('Express server listening on port ' + app.get('port'));
});
