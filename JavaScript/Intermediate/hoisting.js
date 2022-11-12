// Function decleration is scanned and made available
// Variable decleration is scanned and made undefined

sayMe(); // because of global context
function sayMe() {
  console.log("Apurv");
}

naam();
var naam = function () {
  console.log("Apurv");
};

// console.log(sayName);
// sayName = "sjnf";
// var sayName = "appu";
// function naam() {
//   var name = "APurv";
//   console.log(name);
// }

// naam();
// // console.log(typeof undefined);
// // console.log(typeof null);
// console.log(sayName);
