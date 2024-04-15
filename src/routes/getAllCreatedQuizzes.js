function getAllCreatedQuizzes({store}){
	return (req, res)=>{
		requestHandler({req, res, store});
	}
}

async function requestHandler({req, res, store}){
	const promise = store.getAllCreatedQuizzes();

	promise.then((result)=>{
			res.status(200);
			res.json({success: true, msg: "Sent all created quizzes.", data: result});
		});

	promise.catch((err)=>{
		console.log(err.message);
		res.status(500);
		return res.json({success: false, msg: "Fail to get quizzes. Please try again later."});
	});
}


module.exports = {getAllCreatedQuizzes};
