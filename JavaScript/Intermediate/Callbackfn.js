// function isOdd(num) {
//   //   if (num % 2 != 0) {
//   //     return true;
//   //   }
//   //   return false;

//   //Same thing in one line

//   // return num % 2 != 0;
// }
// console.log(isOdd(3));

//Callback functions
// const array = [3, 21, 9, 16].every((e) => e % 2 != 0);
// console.log(array);

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});
