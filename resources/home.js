module.exports = function(app) {

/**
 * GET
 */
    app.get(app.lookupRoute('home'), function(req, res) {

	res.render('home');

    });
    
};

    

