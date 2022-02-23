//For loop
// var states = ["Rajasthan", "Assam", "westBangle", 1947, "jaipur"];

// for (let i = 0; i < states.length; i++) {
//   if (typeof states[i] !== "string") {
//     continue;
//   }
//   console.log(states[i]);
// }

//while and Do while
// var states = ["Rajasthan", "Assam", "westBangle", 1947, "jaipur"];

// let i = 0;
// // while (i < states.length) {
// //   console.log(states[i]);
// //   i++;
// // }

// do {
//   console.log(i);
//   i++;
// } while (i > 20);

//For Each Loop
// var states = ["Rajasthan", "Assam", "westBangle", 1947, "jaipur"];
// states.forEach((s) => console.log(s));

//For In and For of loops

//For of loop is generally used for arrays
// const social = ["youtube", "instagram", "facebook", "telegram"];
// for (const s of social) {
//   console.log(s);
// }

//For in loop is generally used fo objects
const social = {
  yt: "youtube",
  ig: "instagram",
  tl: "telegram",
  fb: "facebook",
};

for (const s in social) {
  console.log(s, social[s]); //or we can use backtiks here
}
