//exercise 1
let str = 'js';
console.log(str.toUpperCase());


//exercise 2
function findWord(arr, search) {
    console.log(arr.filter(item => item.toLowerCase().startsWith(search.toLowerCase())));
}
findWord(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');


//exercise 3
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


//exercise 4
console.log('Максимальное число ' + Math.max(52, 53, 49, 77, 21, 32));
console.log('Минимальное число ' + Math.min(52, 53, 49, 77, 21, 32));


//exercise 5
function getNumber() {
    console.log(Math.ceil(Math.random() * 10));
}
getNumber();


//exercise 6
function getRandomNumbers(a) {
    let arr6 = [];
    for (let i = 0; i < Math.floor(a / 2); i++) {
        arr6[i] = Math.round(Math.random() * a);
    }
    console.log(arr6);
}
getRandomNumbers(5);


//exercise 7
function getRandomNumbers7(a, b) {
    console.log(Math.round(Math.random() * (Math.max(a, b) - Math.min(a, b))) + Math.min(a, b));
};
getRandomNumbers7(6, 2);


//exercise 8
console.log(new Date());



//exercise 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


//exercise 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let rusDate = 'Дата: ' + myDate.getDate() + ' ' + months[myDate.getMonth()] + ' ' + myDate.getFullYear() + ' - это ' + days[myDate.getDay()] + '. Время: ' + myDate.getHours() + ':' + myDate.getMinutes() + ':' + myDate.getSeconds();
console.log(rusDate);