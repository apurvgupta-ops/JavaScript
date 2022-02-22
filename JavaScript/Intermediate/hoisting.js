// Function decleration is scanned and made available
// Variable decleration is scanned and made undefined

// sayMe(); // because of global context
// function sayMe() {
//   console.log("Apurv");
// }

// naam();
// var naam = function () {
//   console.log("Apurv");
// };

console.log(sayName);
var sayName = "Apurv";

function naam() {
  var name = "APurv";
  console.log(name);
}

naam();

console.log(sayName);
