function valUser({jwt}){
	return async (req, res, next) => {
		const token = req.headers["authorization"];
		if(!token){
			res.status(400);
			return res.json({success: false, msg: "For this service is signed in required."});
		}

		const user = await checkToken(token, jwt);
		if(!user){
			res.status(400);
			return res.json({success: false, msg: "No valid Token. Please sign in."});
		}

		req.user = user;
		next();
	}
}

async function checkToken(token, jwt){
	let user = null;
	try{
		user = await jwt.verify(token, process.env.WEB_TOKEN_SECRET);
	}
	catch(err){
		console.log(err);
		return null; 
	}

	return user;
}


module.exports = {valUser};
