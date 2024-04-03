const createdQuizzes = require("../testData/createdQuizzes");

function createStore(){
	const createdQuizzesStorage = createdQuizzes;

	store = {
		createdQuizzesStorage,
		addCreatedQuiz,
		getAllCreatedQuizzes,
	};

	return store;
}


module.exports = {createStore};


async function addCreatedQuiz(quiz){
	this.createdQuizzesStorage.push(quiz);
}

async function getAllCreatedQuizzes(){
	return this.createdQuizzesStorage;
}
