const mysql = require("mysql2");

function createStore(){
	const db = mysql.createConnection({
		host: "localhost",
		user: "tom",
		password: process.env.DB_PASSWORD,
		database: "guess_mate"
	});

	store = {
		db,
		getAllCreatedQuizzes,
	};

	return store;
}

function initDb(){
}

function getAllCreatedQuizzes(){
	const sql = `
		SELECT cq.quiz_id, cq.creator, q.question, a.answer
		FROM created_quizzes cq, questions q, answers a
		WHERE q.question_id = a.question_id AND cq.quiz_id = q.quiz_id;
	`;

	return new Promise((resolve, reject)=>{
		this.db.query(sql, (err, results, fields) =>{
			if(err) reject(err);
			else resolve(results);
		});
	});
}


module.exports = {createStore}
