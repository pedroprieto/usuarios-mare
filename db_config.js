var db = exports.db = {};
var host = process.env.OPENSHIFT_MYSQL_DB_HOST || 'localhost';
var database = 'usuarios';
var testdatabase = 'test';
var username = process.env.OPENSHIFT_MYSQL_DB_USERNAME || 'root';
var password = process.env.OPENSHIFT_MYSQL_DB_PASSWORD || '';
var dialect = 'mysql://';
var port = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;

db.uri = dialect + username + ':' + password + '@' + host + ':' + port + '/' + database;
db.testuri = dialect + username + ':' + password + '@' + host + ':' + port + '/' + testdatabase;

