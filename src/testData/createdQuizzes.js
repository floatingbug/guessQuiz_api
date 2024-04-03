const {randomUUID} = require("crypto");

const createdQuizzes = [
	{
		quizId: randomUUID(),
		userId: randomUUID(),
		quiz: [
			{
				question: "asdf",
				answers: [
					"asldfj",
					"aksdjfkjk",
					"kdjfkdjkkk",
					"ksdkfjjkk",
				],
			},
		],
	},
	{
		quizId: randomUUID(),
		userId: randomUUID(),
		quiz: [
			{
				question: "asdf",
				answers: [
					"asldfj",
					"aksdjfkjk",
					"kdjfkdjkkk",
					"ksdkfjjkk",
				],
			},
		],
	},
	{
		quizId: randomUUID(),
		userId: randomUUID(),
		quiz: [
			{
				question: "asdf",
				answers: [
					"asldfj",
					"aksdjfkjk",
					"kdjfkdjkkk",
					"ksdkfjjkk",
				],
			},
		],
	}
];

module.exports = {createdQuizzes};
