function getAllCreatedQuizzes({store}){
	return (req, res)=>{
		requestHandler({req, res, store});
	}
}

async function requestHandler({req, res, store}){
	console.log("request")

	let result = null;
	const msg = "Fail to get all created quizzes. Plese try again later.";
	try{
		result = await store.getAllCreatedQuizzes();
	}
	catch(err){
		console.log(err);
		res.status(500);
		return res.json({success: false, msg});
	}

	if(!result){
		res.status(500);
		return res.json({success: false, msg});
	}
	
	res.status(200);
	res.json({success: true, msg: "Sent all created quizzes.", data: result});
}


module.exports = {getAllCreatedQuizzes};
