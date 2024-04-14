const mysql = require("mysql2");

async function createStore(){
	const db = await mysql.createConnection({
		host: "localhost",
		user: "tom",
		password: process.env.DB_PASSWORD,
		database: "guess_mate"
	});

	try{
		await db.connect();
	}
	catch(err){
		console.log(err);
	}

	store = {
		db,
		getAllCreatedQuizzes,
	};

	return store;
}

async function getAllCreatedQuizzes(){
	const sql = `
		SELECT cq.quiz_id, cq.creator, q.question, a.answer
		FROM created_quizzes cq, questions q, answers a
		WHERE q.question_id = a.question_id AND cq.quiz_id = q.quiz_id;
	`;

	let result = null;
	try{
		await this.db.connect();
		result = await this.db.query(sql);
	}
	catch(err){
		console.log(err);
		return null;
	}

	return result;
}


module.exports = {createStore}
