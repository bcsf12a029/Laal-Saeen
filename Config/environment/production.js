var port = 3000;
dbUrl = 'db url here';

module.exports = {

	port: process.env.PORT || port,
	dbUrl: process.env.DB_URL || dbUrl
};