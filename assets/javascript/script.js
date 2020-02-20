// Moment.js Clock ///////////
var clock = setInterval(time, 1000);
var timeNow = moment().format('MMMM Do, h:mm a');
function time() {
  var timeNow = moment().format('MMMM Do, h:mm a');
  $('#currentDay').text(timeNow);
};
clock;

// Global Vars /////////////

const list8ToDo = document.getElementById('time8todo');
const list9ToDo = document.getElementById('time9todo');
const list10ToDo = document.getElementById('time10todo');
const list11ToDo = document.getElementById('time11todo');
const list12ToDo = document.getElementById('time12todo');
const list1ToDo = document.getElementById('time1todo');
const list2ToDo = document.getElementById('time2todo');
const list3ToDo = document.getElementById('time3todo');
const list4ToDo = document.getElementById('time4todo');

const allToDo = document.getElementsByClassName('form-group');

const button8 = document.getElementById('time8btn');
const button9 = document.getElementById('time9btn');
const button10 = document.getElementById('time10btn');
const button11 = document.getElementById('time11btn');
const button12 = document.getElementById('time12btn');
const button1 = document.getElementById('time1btn');
const button2 = document.getElementById('time2btn');
const button3 = document.getElementById('time3btn');
const button4 = document.getElementById('time4btn');

let momentNine = moment("09:00", 'HH:mm');
let momentTen = moment("10:00", 'HH:mm');
let momentEleven = moment("11:00", 'HH:mm');
let momentTwelve = moment("12:00", 'HH:mm');
let momentOne = moment("13:00", 'HH:mm');
let momentTwo = moment("14:00", 'HH:mm');
let momentThree = moment("15:00", 'HH:mm');
let momentFour = moment("16:00", 'HH:mm');

// Global Functions ////////////


function saveToDoList8() {
  let thisList = list8ToDo.value;
  let toDoList8 = JSON.parse(localStorage.getItem('toDoList8'));
  if (toDoList8 == null) toDoList8 = [];
  toDoList8[0] = thisList;
  localStorage.setItem('toDoList8', JSON.stringify(toDoList8));
  console.log('working FOR 8')
};

function saveToDoList9() {
  let thisList = list9ToDo.value;
  let toDoList9 = JSON.parse(localStorage.getItem('toDoList9'));
  if (toDoList9 == null) toDoList9 = [];
  toDoList9[0] = thisList;
  localStorage.setItem('toDoList9', JSON.stringify(toDoList9));
  console.log('working FOR 9')
};

function saveToDoList10() {
  let thisList = list10ToDo.value;
  let toDoList10 = JSON.parse(localStorage.getItem('toDoList10'));
  if (toDoList10 == null) toDoList10 = [];
  toDoList10[0] = thisList;
  localStorage.setItem('toDoList10', JSON.stringify(toDoList10));
  console.log('working FOR 10')
};

function saveToDoList11() {
  let thisList = list11ToDo.value;
  let toDoList11 = JSON.parse(localStorage.getItem('toDoList11'));
  if (toDoList11 == null) toDoList11 = [];
  toDoList11[0] = thisList;
  localStorage.setItem('toDoList11', JSON.stringify(toDoList11));
  console.log('working FOR 11')
};

function saveToDoList12() {
  let thisList = list12ToDo.value;
  let toDoList12 = JSON.parse(localStorage.getItem('toDoList12'));
  if (toDoList12 == null) toDoList12 = [];
  toDoList12[0] = thisList;
  localStorage.setItem('toDoList12', JSON.stringify(toDoList12));
  console.log('working FOR 12')
};

function saveToDoList1() {
  let thisList = list1ToDo.value;
  let toDoList1 = JSON.parse(localStorage.getItem('toDoList1'));
  if (toDoList1 == null) toDoList1 = [];
  toDoList1[0] = thisList;
  localStorage.setItem('toDoList1', JSON.stringify(toDoList1));
  console.log('working FOR 1')
};

function saveToDoList2() {
  let thisList = list2ToDo.value;
  let toDoList2 = JSON.parse(localStorage.getItem('toDoList2'));
  if (toDoList2 == null) toDoList2 = [];
  toDoList2[0] = thisList;
  localStorage.setItem('toDoList2', JSON.stringify(toDoList2));
  console.log('working FOR 2')
};

function saveToDoList3() {
  let thisList = list3ToDo.value;
  let toDoList3 = JSON.parse(localStorage.getItem('toDoList3'));
  if (toDoList3 == null) toDoList3 = [];
  toDoList3[0] = thisList;
  localStorage.setItem('toDoList3', JSON.stringify(toDoList3));
  console.log('working FOR 3')
};

function saveToDoList4() {
  let thisList = list4ToDo.value;
  let toDoList4 = JSON.parse(localStorage.getItem('toDoList4'));
  if (toDoList4 == null) toDoList4 = [];
  toDoList4[0] = thisList;
  localStorage.setItem('toDoList4', JSON.stringify(toDoList4));
  console.log('working FOR 4')
};


function emptyToDoListsAtEndOfDay() {
  // if (      ) {
  //   toDoList8 = [];
  //   localStorage.setItem('toDoList8', JSON.stringify(toDoList8));
  //   console.log('working if it is past 5')
  // }
};

function colorSchedule() {
  if(timeNow.isSameOrAfter('MMMM Do, 9:00 a')) {
    console.log('it is after 9 am')
  };
};

function startPage() {
  list8ToDo.value = JSON.parse(localStorage.getItem('toDoList8'));
  list9ToDo.value = JSON.parse(localStorage.getItem('toDoList9'));
  list10ToDo.value = JSON.parse(localStorage.getItem('toDoList10'));
  list11ToDo.value = JSON.parse(localStorage.getItem('toDoList11'));
  list12ToDo.value = JSON.parse(localStorage.getItem('toDoList12'));
  list1ToDo.value = JSON.parse(localStorage.getItem('toDoList1'));
  list2ToDo.value = JSON.parse(localStorage.getItem('toDoList2'));
  list3ToDo.value = JSON.parse(localStorage.getItem('toDoList3'));
  list4ToDo.value = JSON.parse(localStorage.getItem('toDoList4'));
};


// Event Listeners //////////

button8.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList8();
});

button9.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList9();
});

button10.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList10();
});

button11.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList11();
});

button12.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList12();
});

button1.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList1();
});

button2.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList2();
});

button3.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList3();
});

button4.addEventListener('click', function (e) {
  e.preventDefault();
  saveToDoList4();
});

// Start Page //////////

startPage();

colorSchedule();

emptyToDoListsAtEndOfDay();





// //////////////////////
// var highScore = {
//     'userInitials': initials.value.trim(),
//     'userRank': rank,
//     'userScore': score
// };

// // add highScore to local storage 
// var previousHighScores = JSON.parse(localStorage.getItem('previousHighScores'));
// if (previousHighScores == null) previousHighScores = [];
// previousHighScores.push(highScore);
// localStorage.setItem("previousHighScores", JSON.stringify(previousHighScores));






// //austens code 
// // Schedule variables
// let day = moment().format('dddd');
// let date = moment().format('MMMM Do YYYY');
// let currentHour = moment().format('ha');
// let inputElement;
// let hourElement;
// let hour;
// let plans;
// let eventHours = [];
// let schedule = [];

// for (let i = 0; i < hours.length; i++) {
//     if (hours[i].textContent !== currentHour) {
//         let pastInput = hours[i].nextElementSibling;
//         pastInput.classList.add('past-time');
//     } else if (hours[i].textContent === currentHour) {
//         let presentInput = hours[i].nextElementSibling;
//         presentInput.classList.add('present-time');
//         break;
//     }
// }

// // ERIC USE THIS ONE 
// // moment().isAfter(); // false



