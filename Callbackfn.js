function isOdd(num) {
  //   if (num % 2 != 0) {
  //     return true;
  //   }
  //   return false;

  //Same thing in one line

  return num % 2 != 0;
}
// console.log(isOdd(3));

//Callback functions
const array = [3, 21, 9, 15].every((e) => e % 2 != 0);
console.log(array);
