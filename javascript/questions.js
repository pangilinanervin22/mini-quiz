export function getRandomQuestion() {
	const indexArr = [];
	const mainQuestions = [];

	while (indexArr.length !== 10) {
		const rand = Math.floor(Math.random() * arrayOfQuestions.length);
		if (indexArr.includes(rand)) continue;

		indexArr.push(rand);
		mainQuestions.push(arrayOfQuestions[rand]);
	}
	console.log(mainQuestions, indexArr);

	return mainQuestions;
}

const arrayOfQuestions = [
	{
		question: `Java and JavaScript are same programming language.`,
		answer: "False",
		choices: ["True", "False"],
	},
	{
		question: "How many bits are in a byte.",
		answer: "8",
		choices: ["16", "2", "12", "8"],
	},
	{
		question: "What is the brain of the computer.",
		answer: "CPU",
		choices: ["Motherboard", "RAM", "ROM", "CPU"],
	},
	{
		question: `"ILOVEYOU virus" was created by a chinese.`,
		answer: "False",
		choices: ["True", "False"],
	},
	{
		question: "__________ is use for making web pages interactive.",
		answer: "JavaScript",
		choices: ["HTML", "CSS", "XML", "JavaScript"],
	},
	{
		question: "IT in computers is stand for intelligent technology.",
		answer: "False",
		choices: ["True", "False"],
	},
	{
		question: "____ use for describing and styling the presentation of Web pages.",
		answer: "CSS",
		choices: ["CIA", "SSC", "XML", "CSS"],
	},
	{
		question: "Flash drive is use for storing and transferring data.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "ML in computer science is stand for _______________.",
		answer: "Machine Learning",
		choices: ["Machine Learning", "Machine Laughing", "Monster Learning", "Mobile Legends"],
	},
	{
		question: "__________ is the founder of SpaceX PayPal and Tesla.",
		answer: "Elon Musk",
		choices: ["Elon Musk", "Jeff Bezos", "Tim Cook", "Donal Trump"],
	},
	{
		question: "Virus, Worm, Trojan, and SpyWare are example of malware.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "Python Java and C++ examples of a programming languages.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "First programmer in the world is a woman.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "The first original name of java is OAK.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "White hat hacker also called as good hacker.",
		answer: "True",
		choices: ["True", "False"],
	},
	{
		question: "Markup language that use for describing the structure of Web pages.",
		answer: "HTML",
		choices: ["HTML", "CSS", "JavaScript", "XML"],
	},
	{
		question: "Device that supplies electric power for computer.",
		answer: "Power supply",
		choices: ["Power supply", "Mother board", "RAM", "CPU"],
	},
	{
		question: "The father of computer.",
		answer: "Charles Babbage",
		choices: ["Charles Babbage", "Albert Einstein", "Bill Gates", "Charles Darwin"],
	},
	{
		question: "Who is the richest man in end of 2021.",
		answer: "Elon Musk",
		choices: ["Elon Musk", "Bill Gates", "Jeff Bezos", "Mark Zuckerberg"],
	},
	{
		question: "____ is short for information and communications technology.",
		answer: "ICT",
		choices: ["ICT", "CIA", "CCT", "TCI"],
	},
	{
		question: "Google is a example of ____________.",
		answer: "Search engine",
		choices: ["Search engine", "Cryptocurrency", "Operating system", "Internet"],
	},
	{
		question: "TikTok is originated in __________.",
		answer: "China",
		choices: ["China", "USA", "India", "Philippines"],
	},
	{
		question: "Java is invented by __________.",
		answer: "James Gosling",
		choices: ["James Gosling", "Elon Musk", "Guido van Rossum", "James Bond"],
	},
	{
		question: "Binary number is a set of _______? ",
		answer: "0s and 1s",
		choices: ["0s and 1s", "2s and 0s", "1s and 2s", "any number"],
	},
	{
		question: "What is the heart of the computer?",
		answer: "Power Supply",
		choices: ["Power Supply", "GPU", "CPU", "Motherboard"],
	},
	{
		question: "Who is the CEO of facebook?",
		answer: "Mark Zuckerberg",
		choices: ["Mark Zuckerberg", "Bill Gates", "Tim Cook", "Warren Buffet"],
	},
	{
		question: "USB stand for ___________?",
		answer: "Universal Serial Bus",
		choices: [
			"Universal Serial Bus",
			"Universal Cereal Bus",
			"United Serial Bass",
			"none of the above",
		],
	},
	{
		question: "What was invented by Linus Torvalds?",
		answer: "Linux",
		choices: ["Linux", "Microsoft", "Ubuntu", "macOS"],
	},
	{
		question: "What kind of language is HTML?",
		answer: "Markup language",
		choices: [
			"Markup language",
			"Programming language",
			"Scripting language",
			"Structured query language",
		],
	},
];
