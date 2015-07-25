// Build routes

module.exports = function(app) {

    app.defineRoute('home', '/');
    app.defineRoute('personal', '/personal');
    app.defineRoute('cambio_pass', '/cambio_pass');
    app.defineRoute('edicion_usuarios', '/edicion_usuarios');
    app.defineRoute('usuarios', '/usuarios');

}
