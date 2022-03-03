function outer() {
  var name = "Apurv";
  console.log("hello");
  function inner() {
    console.log(name);
  }
  return inner;
}

const value = outer();
value();

function func(x) {
  return function (y) {
    return x + y;
  };
}

console.log(func(4)(5));
