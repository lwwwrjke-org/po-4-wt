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
    
    if (mounth == 2 && day > 29){
        alert("February cannot be more than 29 ");
        throw "February cannot be more than 29 ";
    }
    else if (mounth == 1 || mounth == 3 || mounth == 5 || mounth == 7 || mounth == 8 || mounth == 10 || mounth == 12){
        if (day > 31){
            alert("Invalid day number");
            throw "Invalid day number";
        }
    } else if (day > 30){
        alert("Invalid day number");
        throw "Invalid day number";
    }

    
    let date = new Date(2016, mounth - 1, day);
    let options = { weekday: 'long'};
    alert(new Intl.DateTimeFormat('en-US', options).format(date));
}