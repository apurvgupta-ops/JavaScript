var isLoggedIn = true;
var emailVarified = false;
var cardInfo = true;

// First Way
// if (isLoggedIn) {
//   console.log("You are logged in");
//   if (emailVarified) {
//     console.log("email varified done");
//     if (cardInfo) {
//       console.log("you can purchase now");
//     }
//   }
// }

// Second way
if (isLoggedIn && emailVarified && cardInfo) {
  console.log("You can buy now");
} else {
  console.log("You are not authenticate");
}
