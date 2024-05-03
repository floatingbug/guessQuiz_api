const express = require("express");
const api = express();
const bodyParser = require("body-parser");
const {signIn} = require("./routes/signIn");
const {valUser} = require("./middleware/valUser");
const {addCreatedQuiz} = require("./routes/addCreatedQuiz");
const {valCreatedQuiz} = require("./middleware/valCreatedQuiz");
const {getAllCreatedQuizzes} = require("./routes/getAllCreatedQuizzes");

function createApi({store, jwt}){
	api.use(bodyParser.json());

	api.post("/sign-in", signIn({store, jwt}));
	api.get("/get-all-created-quizzes", valUser({jwt}), getAllCreatedQuizzes({store}));
	api.post("/add-created-quiz", valUser({jwt}), valCreatedQuiz, addCreatedQuiz({store}));

	return api;
}


module.exports = {createApi};
