const express = require("express");
const api = express();
const bodyParser = require("body-parser");
const {addCreatedQuiz} = require("./routes/addCreatedQuiz");
const {getAllCreatedQuizzes} = require("./routes/getAllCreatedQuizzes");

function createApi({store}){
	api.use(bodyParser.json());

	api.get("/get-all-created-quizzes", getAllCreatedQuizzes({store}));

	api.post("/add-created-quiz", addCreatedQuiz({store}));

	return api;
}


module.exports = {createApi};
