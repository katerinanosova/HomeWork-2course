//exercise 1
let password = 'qwerty123';
let userAnswer = prompt('Введите пароль');
if (password === userAnswer) {
    console.log('Пароль введён верно');
} else {
    console.log('Пароль введен неправильно');
}

//exercise 2
let c = 7;
if (c > 0 && c < 10) {
    console.log('верно');
} else {
    console.log('неверно');
}

//exercise 3
let d = 24;
let e = 123;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

//exercise 4
let a = 2;
let b = 3;
console.log (a + b);

//exercise 5
let monthNumber = prompt('Enter month number');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('It is winter now');
        break;
    case '3':
    case '4':
    case '5':
        console.log('It is spring now');
        break;
    case '6':
    case '7':
    case '8':
        console.log('It is summer now');
        break;
    case '9':
    case '10':
    case '11':
        console.log('It is fall now');
        break;
    default: console.log('Something gone wrong');
        break;
}

//exercise 7
let userNumber = prompt('Пожалуйста, введите любое число');
if (isNaN(userNumber)) {
    console.log('Введите всё-таки число');
} else {
    let result = userNumber % 2 > 0 ? 'Число нечетное' : 'Число четное';
    console.log(result);
}

//exercise 8
let clientOS = prompt('What is your OS?');
clientOS = clientOS.toLocaleLowerCase();
if (clientOS === 'android' || clientOS === 'андроид') {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 'iOS') {
    console.log('Установите версию приложения для iOS по ссылке')
} else {
    console.log('Вы ввели что-то не то');
}

//exercise 9
let clientOSnew = prompt('What is your OS?');
let clientDeviceYear = prompt('what is production year of your device?')
clientOSnew = clientOSnew.toLocaleLowerCase();
if ((clientOSnew === 'android' || clientOSnew === 'андроид') && clientDeviceYear >= '2015') {
    console.log('Установите версию приложения для Android по ссылке');
} else if ((clientOSnew === 'android' || clientOSnew === 'андроид') && clientDeviceYear < '2015') {
    console.log('Установите облегченную версию приложения для Android по ссылке');
} else if (clientOSnew === 'ios' && clientDeviceYear >= '2015') {
    console.log('Установите версию приложения для iOS по ссылке');
} else if (clientOSnew === 'ios' && clientDeviceYear < '2015') {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
} else {
    console.log('Вы ввели что-то не то');
}

