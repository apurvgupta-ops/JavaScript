// Spread Operator
function sum(a, b) {
  return a + b;
}
var arr = [3, 4];

console.log(sum(...arr));

//Rest Operator
// function sum1(a, b, ...args) {
//   let multiple = a * b;
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return [multiple, sum];
// }

// console.log(sum1(2, 3, 5, 5));

// const str = "apurv";
// const res = [...str].map((d) => d);
// console.log(res);
