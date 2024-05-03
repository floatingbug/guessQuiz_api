const {randomUUID} = require("crypto");

function addCreatedQuiz({store}){
	return (req, res)=>{
		requestHandler({req, res, store});
	}
}

async function requestHandler({req, res, store}){
	const quiz = req.body;
	const msg = "Fail to add quiz to DB. Please try again later.";
	const creator = {
		creatorId: req.user.id,
		creator: req.user.name
	}
	const id = randomUUID();

	const result = await addQuizzes({quiz, id, creator, store});

	if(!result){
		res.status(500);
		res.json({success: false, msg});
	}
	else{
		res.status(200);
		res.json({success: true, msg: "Quiz added."});
	}
}

async function addQuizzes({quiz, id, creator, store}){

	let result = null;
	try{
		result = await store.addCreatedQuiz({id, quiz, creator});
	}
	catch(err){
		console.log(err);
		return null;
	}
	
	return result;
}


module.exports = {addCreatedQuiz};
