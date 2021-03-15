function task4() {
    while(true) {
        const YEAR = 2016
        let month  = prompt('Enter number of month(1-12)');
        let day;
        month = Number(month);
        if (month < 1 || month > 12) {
            alert("Invalid input!");
            continue;
        }

        if (month == 2) {
          day = prompt('Enter day of the month(1-29)');
          day = Number(day);
          if (month == 2 && day > 29) {
              alert("Invalid input!");
              continue;
          }
        } else {
          day = prompt('Enter day of the month(1-31)');
          day = Number(day);
          if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8
            || month == 10 || month == 12) {
            if (day < 1 || day > 31) {
                alert("Invalid input!");
                continue;
            }
          } else {
            if (day < 1 || day > 30) {
              alert("Invalid input!");
              continue;
            }
          }
        }
        
        if ((month || day) === null) {
            alert("Invalid input!");
            continue;
        }

        let date = new Date(YEAR, month - 1, day);

        switch (date.getDay()) {
          case 0:
            alert('Sunday');
            break;
          case 1:
            alert('Monday');
            break;
          case 2:
            alert('Tuesday');
            break;
          case 3:
            alert('Wednesday');
            break;
          case 4:
            alert('Thursday');
            break;
          case 5:
            alert('Friday');
            break;
          case 6:
            alert('Saturday');
            break;
          default:
            alert('Invalid date!');
        }
    }   
}