// Count total no of strings
// const Count = (string) => {
//     var length = 0;
//     while (string[length] !== undefined) {
//         length++;
//     }
//     return length
// }
// const res = Count("Appp")
// console.log(res)

//Capatilize
const Cap = (name) => {
  //   console.log(name.slice(1));
  return name.charAt(0).toUpperCase() + name.slice(1);
};
const res = Cap("appiygjjjihvbu");
console.log(res);
