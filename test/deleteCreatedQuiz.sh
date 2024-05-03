if [ $# -ne 1 ]; then
	echo "Quiz id is required"
	exit 1
fi
	
key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2YjhiYWUwY2FiZWIxYTJjMThmZmUiLCJuYW1lIjoidG9tIiwicGFzc3dvcmQiOiJrIiwiaWQiOiIxMjMiLCJpYXQiOjE3MTQzNzgyMzd9.7fWSHnSGCTT14N6INJTMTmTm4WDjNNYGn-YBv4pQc5M"

curl -X DELETE -H "Authentication: $key" http://localhost:3000/delete-created-quiz?id=$1
