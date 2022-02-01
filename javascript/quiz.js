import { getRandomQuestion } from "./questions.js";

const domQuestion = document.getElementById("question");
const domChoices = document.getElementById("choices");
const domScore = document.getElementById("quiz_score");
const domModal = document.getElementById("modal_overlay");
const domModalMessage = document.getElementById("modal_message");
const domModalButton = document.getElementById("modal_button");
let mainQuestions = [...getRandomQuestion()];
let currentIndex = 0;
let quizScore = 0;

domModalButton.addEventListener("click", () => {
	domModal.classList.toggle("hide");
	currentIndex = quizScore = 0;
	setQuestionDOM();
});

function setQuestionDOM() {
	const questionObject = mainQuestions[currentIndex];
	domQuestion.textContent = questionObject.question;
	domScore.textContent = quizScore + "/10";
	domChoices.innerHTML = "";
	const indexArr = [];

	while (indexArr.length !== questionObject.choices.length) {
		const rand = Math.floor(Math.random() * questionObject.choices.length);

		if (indexArr.includes(rand)) continue;

		indexArr.push(rand);
		addQuestionDOM(questionObject.choices[rand], rand);
	}
	console.log(currentIndex, questionObject.question, questionObject.answer);

	setClickQuestion();
}

function addQuestionDOM(string, index) {
	domChoices.innerHTML += `<li class="choice">${string}</li>`;
}

function setClickQuestion() {
	let isDisable = false;
	for (const item of document.getElementsByClassName("choice")) {
		item.addEventListener("click", () => {
			//one click policy
			if (isDisable) return;
			isDisable = true;

			//handle correction
			if (item.textContent === mainQuestions[currentIndex].answer) {
				item.classList.add("correct");
				quizScore++;
			} else {
				item.classList.add("wrong");
			}

			//show modal
			if (currentIndex === mainQuestions.length - 1) {
				setShowModal(`Final Score : ${quizScore}`);
				return;
			}

			//transistion
			setTimeout(() => {
				currentIndex += 1;
				setQuestionDOM();
			}, 1000);
		});
	}
}

function setShowModal(message) {
	domModalMessage.textContent = message;
	domModalButton.textContent = "try again";
	domModal.classList.toggle("hide");
}

setQuestionDOM();
