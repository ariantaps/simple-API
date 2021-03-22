var mongojs = require('mongojs');

var databaseUrl = 'ariantaps';
var collections = ['users', 'clubs'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};