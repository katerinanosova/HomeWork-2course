//exercise 1
let c = 10;
alert(c);
c = 20;
alert(c);

//exercise 2
let iphoneLaunch = 2007;
alert(`год выпуска первого iPhone - ${iphoneLaunch}`);

//exercise 3
let javaDev = "Brendan Eich";
alert(`Создатель языка JavaScript - ${javaDev}`);

//exercise 4
let x = 10;
let y = 2;
alert(`Сумма ${x + y}, разность ${x - y}, произведение ${x * y}, частное ${x / y}`);

//exercise 5
let result = 2 ** 5;
alert(result);

//exercise 6
let a = 9;
let b = 2;
alert(`Остаток от деления 9 на 2 будет ${a % b}`);

//exercise 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//exercise 8
let age = prompt(`Сколько вам лет?`);
alert(`Вам ${age} лет`);

//exercise 9
const user = {
    name: 'Pacman',
    age: 42,
    isAdmin: true
}
user['country of residence'] = 'Japan';
user.age = 30;
delete user['country of residence']
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);
