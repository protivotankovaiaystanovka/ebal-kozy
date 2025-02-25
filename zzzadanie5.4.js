// let i = 0;
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`);
//     }
//     i++;
// }


// let i = 0;
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     newStudent = newStudent.trim();
//     if (newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`); 
//     i++;
// } while (i < 3);


// let arr = ['banana', 'melon', 'strawberry']

// array.forEach(element => {
//     if(element.length > logenstWord.length)
//         logenstWord = word;
// });

// console.log(`самое длинное слово: ${logenstWord}`);

let arr = ['banana','strawberry', 'melon', ];

let longestELEMENT = "";

arr.forEach(element => {
    if (element.length > longestELEMENT.length) {
        longestELEMENT = element;
    }
});

console.log(`Самое длинное слово: ${longestELEMENT}`);
