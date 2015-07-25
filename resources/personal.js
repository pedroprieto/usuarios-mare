module.exports = function(app) {

/**
 * GET
 */
    app.get(app.lookupRoute('personal'), function(req, res) {

	res.render('personal');

    });

};
