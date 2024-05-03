function valCreatedQuiz(req, res, next){
	let isValidQuiz = validateQuiz(req);

	if(isValidQuiz){
		next()
	}
	else{
		res.status(400);
		res.json({success: false, msg: "Quiz has not the right format."});
	}
}

function validateQuiz(req){
	const quiz = req.body.quiz;

	let isValidQuiz = true;

	//validate if quiz exists
	if(!req.body || !req.body.quiz){
		isValidQuiz = false;
	}

	//validate if the quiz is an array
	if(!Array.isArray(quiz)){
		isValidQuiz = false;
	}
	
	//validate if only objecta are in the array
	if(isValidQuiz){
		isValidQuiz = quiz.every(item => typeof item === 'object');
	}
	
	//validate objects
	if(isValidQuiz){
		isValidQuiz = quiz.every(item => {
			if(
				!item.question || !item.answers ||
				!Array.isArray(item.answers) || 
				item.answers.length !== 4 ||
				typeof item.question !== "string"
			){
				return false;
			}
			else{
				return true;
			}
		});
	}

	//validate answers
	if(isValidQuiz){
		quiz.forEach((currQuiz) => {
			isValidQuiz = currQuiz.answers.every(answer => typeof answer === "string");
		});
	}

	return isValidQuiz;
}


module.exports = {valCreatedQuiz};
