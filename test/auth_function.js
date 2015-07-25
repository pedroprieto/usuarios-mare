'use strict';

var req = require('supertest-as-promised');
var should = require('should');
var app = require('../main.js').app;
var routes = require('../routes/routes');

describe('Autenticación.', function () {

    var user = 'admin';
    var password = 'admin';
    var request = req(app);

    it('Debe negar acceso si no hay usuario.', function (done) {
	request
	    .get('/personal')
	    .expect(401,done);
	
	
    });

    it('Debe negar acceso si hay usuario incorrecto.', function (done) {
	this.timeout(40000);
	request
	//.get(app.buildLink('users').href)
	    .get('/personal')
	    .set("Authorization", "basic " + new Buffer('wronguser:wrongpass').toString("base64"))
	    .expect(401,done);
	
	
    });

    it('Debe permitir acceso con usuario correcto.', function(done) {
	this.timeout(40000);
	request
	    .get('/personal')
	    //.get(app.buildLink('users').href)
	    .set("Authorization", "basic " + new Buffer(user + ':' + password).toString("base64"))
	    .expect(200)
	    .end(function(err,res) {
		should.not.exist(err);
		//res.body.should.have.property('collection');
		done();
	    });
    });
});

