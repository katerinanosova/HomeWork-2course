function getSeason() {
    let monthNumber = prompt('Введите номер месяца');
    if (monthNumber === '12' || monthNumber === '1' || monthNumber === '2') {
        alert('Это зима')
    }
    else if (monthNumber === '3' || monthNumber === '4' || monthNumber === '5') {
        alert('Это Весна')
    }
    else if (monthNumber === '6' || monthNumber === '7' || monthNumber === '8') {
        alert('Это Лето')
    }
    else if (monthNumber === '9' || monthNumber === '10' || monthNumber === '11') {
        alert('Это Осень')
    }
    else {
        confirm('Вы ввели неправильное значение. Попробовать еще раз?') ? getSeason() : alert('А зря!');
    }
}