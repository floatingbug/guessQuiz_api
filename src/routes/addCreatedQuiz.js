function addCreatedQuiz({store}){
	return (req, res)=>{
		requestHandler({req, res, store});
	}
}

async function requestHandler({req, res, store}){
	const quiz = req.body;

	await addQuizzes({quiz, res});
}

async function addQuizzes({quiz, res}){

	let result = null;
	try{
		result = await store.addCreatedQuiz(quiz);
	}
	catch(err){
		console.log(err);
		res.status(500);
		return res.json({success: false, msg: "Fail to add quiz to DB. Please try again later."});
	}

	res.status(200);
	res.json({success: true, msg: "Quiz has been added."});
}


module.exports = {addCreatedQuiz};
