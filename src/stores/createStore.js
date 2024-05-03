const {MongoClient} = require("mongodb");

function createStore(){
	const client = new MongoClient("mongodb://localhost:27017");
	const db = client.db("guessMate");

	const store = {
		client,
		db,
		getUser,
		addCreatedQuiz,
		addGuessedQuiz,
		getAllCreatedQuizzes,
	}

	return store;
}


async function getUser(credentials){

	let result = null;
	try{
		await this.client.connect();
		const user = this.db.collection("user");
		result = await user.findOne(credentials);
	}
	catch(err){
		throw new Error(err);
	}
	finally{
		await this.client.close();
	}

	return result;
}

async function addCreatedQuiz({quiz, id, creator}){
	const doc = {
		id,
		creator,
		quiz
	}
	
	let result = null;
	try{
		const createdQuizzes = this.db.collection("createdQuizzes");
		await this.client.connect();
		result = await createdQuizzes.insertOne(doc);
	}
	catch(err){
		console.log(err);
		return null;
	}
	finally{
		this.client.close();
	}

	if(!result.acknowledged){
		return null;
	};
	return result;
}

async function addGuessedQuiz(){
}

async function getAllCreatedQuizzes(){

	let result = null;
	try{
		const createdQuizzes = this.db.collection("createdQuizzes");
		await this.client.connect();
		result = await createdQuizzes.find();
		result = await result.toArray();
	}
	catch(err){
		console.log(err);
		return null;
	}
	finally{
		await this.client.close();
	}

	return result;
}


module.exports = {createStore}
