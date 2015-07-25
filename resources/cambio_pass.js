module.exports = function(app) {

    var campo_old_password = 'old_passwd';
    var campo_new_password = 'new_passwd';
    var campo_confirm_new = 'new_passwd_confirm';
    
    /**
     * GET
     */
    app.get(app.lookupRoute('cambio_pass'), function(req, res) {

	res.render('cambio_pass', { c_old: campo_old_password, c_new: campo_new_password, c_confirm: campo_confirm_new});

    });

    /**
     * POST
     */
    app.post(app.lookupRoute('cambio_pass'), function(req, res, next) {
	var oldp = req.body[campo_old_password];
	var newp = req.body[campo_new_password];
	var newpc = req.body[campo_confirm_new];

	var user = req.user;
	var err;

	if (newp != newpc) {
	    err = "Las contraseñas no son iguales.";
	    return res.render('cambio_pass', { c_old: campo_old_password, c_new: campo_new_password, c_confirm: campo_confirm_new, error: err});
	    return next(err);
	}

	var ssha = require("ssha");

	if (!ssha.verify(oldp, user.password)) {
	    err = "La contraseña antigua no es correcta.";
	    return res.render('cambio_pass', { c_old: campo_old_password, c_new: campo_new_password, c_confirm: campo_confirm_new, error: err});
	} else {
	    var newp_hash = ssha.create(newp);
	    user.password = newp_hash;
	    user.save()
		.then(function() {
		    err = "Contraseña actualizada. Deberá autenticarse de nuevo para seguir navegando por el sitio.";
		    //return res.redirect('/');
		    return res.render('cambio_pass', { c_old: campo_old_password, c_new: campo_new_password, c_confirm: campo_confirm_new, exito: err});
		})
		.catch(next);
	}
	
    });

};

