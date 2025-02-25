const questions = [
    { question: "JavaScript появился в 1995 году?", correct: true },
    { question: "Спецификация JavaScript называется ECMAScript?", correct: true },
    { question: "JavaScript был создан за 1 месяц?", correct: false }
];


questions.forEach(item => {
    const userAnswer = confirm(item.question);
    if (userAnswer === item.correct) {
        alert("Чиназес");
    } else {
        alert("гавно");
    }
});