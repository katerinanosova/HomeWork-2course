//exercise 1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == 10) break;
    console.log(arr1[i]);
}

//exercise 2
let arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));


//exercise 3
let arr3 = [1, 3, 5, 10, 20];
arr3 = arr3.join(' ');
console.log(arr3);


//exercise 4
let arr4 = [];
for (let index = 0; index < 3; index++) {
    arr4[index] = [];
    for (let el = 0; el < 3; el++) {
        arr4[index][el] = 1;
    }
}
console.log(arr4);


//exercise 5
let arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);


//exercise 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.pop(arr6.sort());
console.log(arr6);


//exercise 7
let arr7 = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Какое число от 1 до 10 хотите проверить?'));
if (userAnswer >= 1 && userAnswer <= 10) {
    let result = arr7.includes(userAnswer);
    console.log(result);
}
else {
    alert('Неверное число');
}


//exercise 8
let letters = 'abcdef';
letters = letters.split('').reverse().join('');
console.log(letters);


//exercise 9
let arr9 = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log([...arr9[0], ...arr9[1]]);


//exercise 10
let arr10 = [9, 8, 7, 6, 5];
for (let i = 0; i < arr10.length; i++) {
    let element = arr10[i] + arr10[i + 1];
    if (i === (arr10.length - 1)) {
        element = arr10[i]
    }
    console.log(element);
}


//exercise 11
let arr11 = [];
function getSquares(arr11) {
    return arr11.map(item => item ** 2);
}
getSquares([2, 3, 4, 5]);

//exercise 12
let arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];
function getElementLength() {
    return arr12.map(element => element.length);
};
getElementLength();


//exercise 13
let arr13 = [];
function getNegatives(arr13) {
    return arr13.filter(item => item < 0);
};
getNegatives([1, 15, -3, 8, 0, -4]);


//exercise 14
let arr14 = [];
for (let i = 0; i < 10; i++) {
    arr14[i] = Math.round(Math.random() * 10);
}
console.log(arr14);
let evenNumbers = arr14.filter(item => item % 2 === 0);
console.log(evenNumbers);


//exercise 15
let arr15 = [];
for (let i = 0; i < 6; i++) {
    arr15[i] = Math.ceil(Math.random() * 10);
}
console.log(arr15);
const average = (arr15.reduce((a, b) => a + b) / arr15.length);
console.log(average);

