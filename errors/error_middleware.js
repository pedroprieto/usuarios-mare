// Fuente: https://github.com/jeduan/express4-mongoose-bluebird

// TODO: mejorar el tema de mensajes, etc.


module.exports.logErrors = function(err, req, res, next){
    if (err.status === 404) {
	return next(err)
    }
    if (err.logError === false) {
	return next(err)
    }
    console.error(err.stack)
    next(err)
};

module.exports.respondError = function(err, req, res, next){
    var status, message;

    /*switch(err.name) {
    case 'personalizado':
	console.log('pedro personalizado');
	break;
    default:
	console.log('estándar');
    }*/

    
    status = err.status || 500
    res.status(status)
    message = err.message

    if (!message) {
	if (status === 403) {
	    message = 'No autorizado'
	} else {
	    message = '¡Oops, ha habido un problema!'
	}
    }
    
	res.type('txt').send(message + '\n');
	return
};
