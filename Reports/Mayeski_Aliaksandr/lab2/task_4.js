function TASK_4() {
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var date = new Date(prompt('введите дату', ''));
    alert(days[date.getDay()])
}