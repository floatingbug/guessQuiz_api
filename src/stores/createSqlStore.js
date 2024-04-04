const mysql = require("mysql2");

function createStore(){
	const db = mysql.createConnection({
		host: "localhost",
		user: "tom",
		password: process.env.DB_PASSWORD,
		database: "guess_mate"
	});

	try{
		db.connect();
	}
	catch(err){
		console.log("---------->", err);
	}

	store = {
		db,
	};

	return store;
}


module.exports = {createStore}
