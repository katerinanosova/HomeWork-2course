//exercise 1
let i = 1;
while (i <= 2) {
    console.log('Hi');
    i++;
}

//exercise 2
let a = 1;
while (a <= 5){
    console.log(a);
    a++;
}

//exercise 3
let b = 7;
while (b <= 22){
    console.log(b);
    b++;
}

//exercise 4
const salary = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let name in salary) {
    console.log(`${name} - зарплата ${salary[name]}`);
}

//exercise 5
for (let n = 1000, num = 1; n >= 50; num++){
    n /= 2;
}
console.log(`Результат ${n}, количество интераций ${num}`)


//exercise 6
let firstFriday = 2;
let friday = 0;
while (friday <= 31) {
    friday++;
    if (friday % 7 !== firstFriday) {
        continue;
    }
    console.log(`Сегодня пятница, ${friday}-е число. Необходимо подготовить отчет.`);
}