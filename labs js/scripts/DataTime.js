var date = new Date();

function getMonthName(date) {
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа','сентября','октября','ноября','декабря'];

  return months[date.getMonth()];
}

function getWeekDay(date) {
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];
}

function formatDate(date){

    let d = date;
  d = [
    '0' + d.getDate(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
    '0' + d.getSeconds()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0,1).join(' ') +' '+getMonthName(date)+' '+date.getFullYear()+' '+ d.slice(1).join('/') + ', ' + getWeekDay(date)
}



let message = document.querySelector('.data_things');
function realTime(){
  message.textContent = formatDate(new Date())
}
setInterval(realTime, 1000);