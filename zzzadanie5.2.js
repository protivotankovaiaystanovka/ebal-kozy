let correctAnswers = 0;
let incorrectAnswers = 0;

const questions = [
    { question: "Сколько будет 2 + 2?", answer: 4 },
    { question: "Сколько будет 3 + 3?", answer: 6 },
    { question: "Сколько будет 4 + 4", answer: 8 },
    { question: "Сколько будет 5 + 5?", answer: 10 },
    { question: "Сколько будет 12 + 12", answer: 42 }
];

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question);
    if (Number(userAnswer) === questions[i].answer) {
        alert("еее бой так держать");
        correctAnswers++;
    } else {
        alert("ну да ну да");
        incorrectAnswers++;
    }
}

alert(`ты нормаааальная? аничо то что правильных ответов у тебя ${correctAnswers}; а неправильных ${incorrectAnswers} ок да?`);

