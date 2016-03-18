var port = 3000;
dbUrl = 'mongodb://localhost/laalsaeen';

module.exports = {

	port: process.env.PORT || port,
	dbUrl: process.env.DB_URL || dbUrl
};