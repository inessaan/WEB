let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    prev = container.getElementsByClassName('prev')[0],
    next = container.getElementsByClassName('next')[0],
    monthName = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'];



let curDate = nowDate.setMonth(nowDate.getMonth() - 1);

function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(), // возвращает количество дней в выбранном месяце
        monthPrefix = new Date(year, month, 0).getDay(),  //возвращает номер дня недели
        monthDaysText = '';

    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0){        // заполняем пустые дни недели
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';
        }
    }

    for (let i = 1; i <= monthDays; i++){   // заполняем числа - дни
        monthDaysText += '<li>' + i + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){    // выделение сегодняшней даты
        days = daysContainer.getElementsByTagName('li');
        days[nowDateNumber].classList.add('date-now');
    }


}

setMonthCalendar(nowYear,nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1); // смещает дату на месяц назад

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1); // смещает дату на месяц вперед

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}