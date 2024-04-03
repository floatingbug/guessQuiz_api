function getAllCreatedQuizzes({store}){
	return (req, res)=>{
		requestHandler({req, res, store});
	}
}

async function requestHandler({req, res, store}){

	let result = null;
	try{
		result = await store.getAllCreatedQuizzes();
	}
	catch(err){
		res.status(500);
		return res.json({success: false, msg: "Fail to get quizzes. Please try again later."});
	}

	res.status(200);
	res.json({success: true, msg: "Sent all created quizzes.", data: result});
}


module.exports = {getAllCreatedQuizzes};
