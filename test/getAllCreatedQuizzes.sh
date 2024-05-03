key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2YjhiYWUwY2FiZWIxYTJjMThmZmUiLCJuYW1lIjoidG9tIiwicGFzc3dvcmQiOiJrIiwiaWQiOiIxMjMiLCJpYXQiOjE3MTQzNzgyMzd9.7fWSHnSGCTT14N6INJTMTmTm4WDjNNYGn-YBv4pQc5M"

curl -H "Authorization: $key"  http://localhost:3000/get-all-created-quizzes | jq
