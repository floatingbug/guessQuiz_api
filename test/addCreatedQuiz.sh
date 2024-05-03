key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2YjhiYWUwY2FiZWIxYTJjMThmZmUiLCJuYW1lIjoidG9tIiwicGFzc3dvcmQiOiJrIiwiaWQiOiIxMjMiLCJpYXQiOjE3MTQzNzgyMzd9.7fWSHnSGCTT14N6INJTMTmTm4WDjNNYGn-YBv4pQc5M"

curl -H "Content-Type: application/json" -H "Authorization: $key" \
    -d '{ "quiz": 
	[ {"question": "question1", "answers": ["a1 q1", "a2 q1", "a3 q1", "a4 q1"]}, {"question": "question2", "answers": ["a1 q1", "a2 q2", "a3 q3", "a4 q4"]}, {"question": "question3", "answers": ["a1 q1", "a2 q2", "a3 q3", "a4 q4"]}, {"question": "question4", "answers": ["a1 q1", "a2 q2", "a3 q3", "a4 q4"]} ] }' \
	http://localhost:3000/add-created-quiz
