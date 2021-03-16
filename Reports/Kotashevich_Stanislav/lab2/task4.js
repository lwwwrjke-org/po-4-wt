function TASK4(){
    let mounth = prompt("Month number (1-12)");

    mounth = Number(mounth);
    if (isNaN(mounth) || mounth < 1 || mounth > 12){
        alert("Invalid month number");
        throw "Invalid month number";
    }
    
    let day = prompt("Day number (1-31)");
    
    day = Number(day);
    if (isNaN(day) || day < 1 || day > 31){
        alert("Invalid day number");
        throw "Invalid day number";
    }
    
    if (mounth == 2 && day > 28){
        alert("February cannot be more than 28 ");
        throw "February cannot be more than 28 ";
    }
    
    let date = new Date(2021, mounth, day);
    let options = { weekday: 'long'};
    alert(new Intl.DateTimeFormat('en-US', options).format(date));
}