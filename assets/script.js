currentDayEl = document.querySelector("#currentDay");








// let's go ahead and put today's date on top of the planner
var today = new Date();
// var date = today.getDay()+","+(today.getMonth()+1)+","+today.getDate();
var day =today.getDay();
var month = today.getMonth()+1;
var date = today.getDate();
// I'm sure there was an easier way to do this
var dayArr =["non","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var monthArr =["non","January","February","March","April","May","June","July","August","September","October","November","December"];
var dateArr =["non","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th","21st","22nd","23rd","24th","25th","26th","27th","28th","29th","30th","31st"];



currentDayEl.textContent = dayArr[day] + ", " + monthArr[month] + ", "+ dateArr[date];