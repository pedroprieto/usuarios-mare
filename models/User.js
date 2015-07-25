module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
	uid: {
	    type: DataTypes.STRING,
	    unique: true
	    //field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
	},
	password: {
	    type: DataTypes.STRING
	},
	nombre: {
	    type: DataTypes.STRING
	},
	apellidos: {
	    type: DataTypes.STRING
	},
	nif: {
	    type: DataTypes.STRING,
	    primaryKey: true
	},
	nia: {
	    type: DataTypes.STRING,
	    primaryKey: true
	},
	tipo: {
	    type: DataTypes.STRING
	}
    }, {
	freezeTableName: true // Model tableName will be the same as the model name
    });
};

//User.sync({force: true});
