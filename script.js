function getSeason() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber === '12' || monthNumber === '1' || monthNumber === '2') {
        alert('Это зима');
        confirm('Сыграть ещё раз?') ? getSeason() : alert('Жаль');
    }
    else if (monthNumber === '3' || monthNumber === '4' || monthNumber === '5') {
        alert('Это Весна');
        confirm('Сыграть ещё раз?') ? getSeason() : alert('Жаль');
    }
    else if (monthNumber === '6' || monthNumber === '7' || monthNumber === '8') {
        alert('Это Лето');
        confirm('Сыграть ещё раз?') ? getSeason() : alert('Жаль');
    }
    else if (monthNumber === '9' || monthNumber === '10' || monthNumber === '11') {
        alert('Это Осень');
        confirm('Сыграть ещё раз?') ? getSeason() : alert('Жаль');
    }
    else {
        confirm('Вы ввели неправильное значение. Попробовать еще раз?') ? getSeason() : alert('А зря!');
    }
}