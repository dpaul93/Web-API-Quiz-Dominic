function getQuizQuestions() {
	return[

	{question: "Inside which HTML element do we put the JavaScript?",
	choices: ["<script>", "<scripting>", "<javascript>", "<js>"],
	correctAnswer: "<script>"},

    {question:"Where is the correct place to insert a JavaScript?",
    choices: ["The <body> section ", "The <head> section", "Both the <head> section and the <body> section are correct", "above the header"],
    correctAnswer: "Both the <head> section and the <body> section are correct"
    },

    {question: "What is the correct syntax for referring to an external script called xxx.js?",
    choices: ["<script name=xxx.js>", "<script href=xxx.js>", "<script src=xxx.js>", "<script img=xxx.js>"],
    correctAnswer: "<script src=xxx.js>"
    },

	{question: "How to write an IF statement in JavaScript?",
	choices: ["if i = 5 then", "if i = 5", "if i == 5 then", "if (i == 5)"],	
	correctAnswer: "if (i == 5)"
	},

	{question: "How does a WHILE loop start?",
    choices: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "if while (do 10 - i)"],
    correctAnswer: "while (i <= 10)"
	}
]
};