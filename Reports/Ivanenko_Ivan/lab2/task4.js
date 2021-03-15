
const Months = {
  JANUARY: 0,   // 30
  FEBRUARY: 1,  // 29
  MARCH: 2,     // 31
  APRIL: 3,     // 30
  MAY: 4,       // 31
  JUNE: 5,      // 30
  JULY: 6,      // 30
  AUGUST: 7,    // 31
  SEPTEMBER: 8, // 30
  OCTOBER: 9,  // 29
  NOVEMBER: 10, // 30
  DECEMBER: 11, // 31
}

const DaysOfTheWeek = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
}

function isMonth(month){
  if(!isNaN(month) && Number(month) >= 0 && Number(month) <= 11) {
    return true;
  }
  return false;
}


function getAmountOfDaysOfTheMonth(month){
  if(month == Months.FEBRUARY ||
     month == Months.OCTOBER) {
       return 29;
     } else if(
       month == Months.JANUARY   ||
       month == Months.APRIL     ||
       month == Months.JUNE      ||
       month == Months.JULY      ||
       month == Months.SEPTEMBER ||
       month == Months.NOVEMBER) {
         return 30;
     } else if(
       month == Months.MARCH    ||
       month == Months.MAY      ||
       month == Months.AUGUST   ||
       month == Months.DECEMBER) {
         return 31;
     } else {
       alert("sth went wrong");
       return 32;
     }
}


function isDayOfTheMonth(dayOfTheMonth, amountOfDaysOfTheMonth){
  if(!isNaN(dayOfTheMonth)) {
    if( Number(dayOfTheMonth) >= 1 && Number(dayOfTheMonth) <= amountOfDaysOfTheMonth ){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function printDayOfTheWeek(day){
  switch(day){
    case DaysOfTheWeek.SUNDAY:
      alert("Sunday");
      break;
    case DaysOfTheWeek.MONDAY:
      alert("Monday");
      break;
    case DaysOfTheWeek.TUESDAY:
      alert("Tuesday");
      break;
    case DaysOfTheWeek.WEDNESDAY:
      alert("Wednesday");
      break;
    case DaysOfTheWeek.THURSDAY:
      alert("Thursday");
      break;
    case DaysOfTheWeek.FRIDAY:
      alert("Friday");
      break;
    case DaysOfTheWeek.SATURDAY:
      alert("Saturday");
      break;
    default:
      alert("Something went wrong...");
      break;
  }
}


let year = 2016;

let month;
do {
  month = Number(prompt("Input number of month: ")) - 1;
} while(!isMonth(month));
let amountOfDaysOfTheMonth = getAmountOfDaysOfTheMonth(month);

let dayOfTheMonth;
do{
  dayOfTheMonth = prompt("Input day of the month");
} while(!isDayOfTheMonth(dayOfTheMonth, amountOfDaysOfTheMonth));


let date = new Date(year, month, dayOfTheMonth);
printDayOfTheWeek(date.getDay());
