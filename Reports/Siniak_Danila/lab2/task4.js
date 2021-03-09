function task4() {
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var date = new Date(prompt('введите дату (формат ввода [year mm dd])', ''));
    alert(days[date.getDay()])
}