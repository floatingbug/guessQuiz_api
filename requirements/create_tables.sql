CREATE TABLE users(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	user_name VARCHAR(40) NOT NULL,
	user_email VARCHAR(40),
	user_password VARCHAR(40) NOT NULL
);

CREATE TABLE created_quizzes(
	quiz_id INT AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
	creator VARCHAR(40) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE questions(
	question_id INT AUTO_INCREMENT PRIMARY KEY,
	quiz_id INT,
	question VARCHAR(400) NOT NULL,
	FOREIGN KEY (quiz_id) REFERENCES created_quizzes(quiz_id) ON DELETE CASCADE
);

CREATE TABLE answers(
	answer_id INT AUTO_INCREMENT PRIMARY KEY,
	question_id INT,
	answer VARCHAR(400) NOT NULL,
	FOREIGN KEY (question_id) REFERENCES questions(question_id) ON DELETE CASCADE
);
