var Sequelize = require('sequelize');
var db_config = require('../db_config');

// Conexión base datos
var sequelize = new Sequelize(process.env.NODE_ENV!='test'? db_config.db.uri : db_config.db.testuri, {
    logging: false
});

// Cargar modelos
var models = [
  'User'
];


models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
/*(function(m) {
    m.PhoneNumber.belongsTo(m.User);
    m.Task.belongsTo(m.User);
    m.User.hasMany(m.Task);
    m.User.hasMany(m.PhoneNumber);
})(module.exports);*/

// export connection
module.exports.sequelize = sequelize;
