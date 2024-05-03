function signIn({store, jwt}){
	return (req, res)=>{
		requestHandler({req, res, store, jwt});
	}
}

async function requestHandler({req, res, store, jwt}){
	const credentials = {
		name: req.body.name,
		password: req.body.password
	}

	SERVER_ERROR = 1;
	WRONG_CREDENTIALS = 2;
	
	const user = await getUser({credentials, store});

	//server error
	if(user === SERVER_ERROR){
		res.status(500);
		return res.json({success: false, msg: "Fail to get user. Please try again later."});
	}
	//wrong credentials
	if(user === WRONG_CREDENTIALS){
		res.status(200);
		return res.json({success: false, msg: "Username or password is incorrect."});
	}
	
	//make token
	const token = await makeToken(jwt, user);
	
	if(!token){
		res.status(500);
		return res.json({success: false, msg: "Fail to create token. Please try again later."});
	}

	//send token
	res.set({
		Authorization: token
	});

	res.json({success: true, msg: "Token sent in Authorization Header."});
}

async function getUser({credentials, store}){
	let user = null;
	
	try{
		user = await store.getUser(credentials);
	}
	catch(err){
		console.log(err);
		return SERVER_ERROR;
	}

	if(!user){
		return WRONG_CREDENTIALS;
	}

	return user;
}

async function makeToken(jwt, user){

	let token = null;
	try{
		token = await jwt.sign(user, process.env.WEB_TOKEN_SECRET)
	}
	catch(err){
		console.log(err);
		return null;
	}

	return token;
}


module.exports = {signIn};
