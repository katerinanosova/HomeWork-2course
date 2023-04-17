//exercise 1
function sum(arr) {
    console.log(arr.reduce((a, b) => a + b));
}

function mult(arr) {
    console.log(arr.reduce((a, b) => a * b));
}

function getResult(arr, callback) {
    callback(arr);
}

getResult([1, 2, 3], mult);


//exercise 2
function compareAge(a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
}

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];
users.sort(compareAge);
console.log(users);


//exercise 3
function reverseArr(arr) {
    let result = arr.reverse();
    console.log(result);
}

function toNumberArr(arr) {
    let result = arr.map(Number).filter(item => !isNaN(item));
    console.log(result);
}

function each(arr, callback) {
    callback(arr);
}

each([1, '4', false, 9, 'two'], toNumberArr)



//exercise 4
function getDate() {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30000)
}
getDate();


//exercise 5
function calling() {
    console.log('Звоню!')
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);
