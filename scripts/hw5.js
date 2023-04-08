//exercise 1
function getLowerNumber(a, b) {
    return a > b ? b : a;
}
getLowerNumber(4, 8);

//exercise 2
function getOddNumber(a) {
    return a % 2 === 0 ? 'Число четное' : 'Число нечетное';
}
getOddNumber(9);

//exercise 3.1
function getSquare(a) {
    return a ** 2;
}
getSquare(3);

//exercise 3.2
let getSquare = (a) => a ** 2;
console.log(getSquare(5))

//exercise 4
let userAge = prompt('How old are you?');
function sayHello() {
    if (userAge >= 0 && userAge <= 12) {
        alert('Привет, друг!')
    }
    else if (userAnswer > 12) {
        alert('Добро пожаловать!')
    }
    else {
        alert('Вы ввели неправильное значение')
    }
}
sayHello();

//exercise 5
let a = prompt('Enter first number');
let b = prompt('Enter second number');

function getSquare() {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    else {
        return a * b;
    }
}

getSquare();

//exercise 6
let userAnswer = prompt('Enter number');

function getSquare() {
    let result = userAnswer ** 3;
    if (isNaN(userAnswer)) {
        return 'Переданный параметр не является числом';
    }
    else {
        return `${userAnswer} в кубе равняется ${result}`
    }
}

getSquare();

//exercise 6
function getArea() {
    return this.radius ** 2 * 3.14;
}
function getPerimeter() {
    return this.radius * 2 * 3.14;
}

const circle1 = {
    radius: 3,
    area: getArea,
    perimeter: getPerimeter
}

const circle2 = {
    radius: 2,
    area: getArea,
    perimeter: getPerimeter
}

console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());
