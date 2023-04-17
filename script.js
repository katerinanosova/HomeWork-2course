function getSeason() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber > 0 && monthNumber <= 12) {
        if (monthNumber === '12' || monthNumber === '1' || monthNumber === '2') {
            alert('Это зима');
        }
        else if (monthNumber === '3' || monthNumber === '4' || monthNumber === '5') {
            alert('Это Весна');
        }
        else if (monthNumber === '6' || monthNumber === '7' || monthNumber === '8') {
            alert('Это Лето');
        }
        else if (monthNumber === '9' || monthNumber === '10' || monthNumber === '11') {
            alert('Это Осень');
        }
        confirm('Сыграть ещё раз?') ? getSeason() : alert('Жаль');
    }
    
    else {
        confirm('Вы ввели неправильное значение. Попробовать еще раз?') ? getSeason() : alert('А зря!');
    }
}

function guessFruit() {
    let fruitList = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruitListNew = fruitList.sort(() => Math.random() - 0.5);
    alert(`Запомни порядок фруктов: ${fruitListNew.join(', ')}`);
    let userFirstElementAnswer = prompt('Какой фрукт был первый в списке?');
    let userLastElementAnswer = prompt('Какой фрукт был последним в списке?');
    if (userFirstElementAnswer === null && userLastElementAnswer === null) {
        alert('Ладно, не будем играть')
    }
    else if (userFirstElementAnswer.toLowerCase() === fruitListNew[0].toLowerCase() && userLastElementAnswer.toLowerCase() === fruitListNew[fruitListNew.length - 1].toLowerCase()) {
        alert(`Молодец!`)
    }
    else if (userFirstElementAnswer.toLowerCase() === fruitListNew[0].toLowerCase() || userLastElementAnswer.toLowerCase() === fruitListNew[fruitListNew.length - 1].toLowerCase()) {
        alert(`Вы были близки к победе!`)
    }
    else {
        confirm('Оба ответа неверные. Давай ещё раз?') ? guessFruit() : alert('Зря! Это тренирует память!')
    }
}