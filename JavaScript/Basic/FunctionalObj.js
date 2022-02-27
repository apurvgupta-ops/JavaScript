var User = function (firstName, lastname) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.fullName = function () {
    console.log(`Full Name : ${firstName} `);
  };
};

var user1 = new User("Apurv", "gupta");
console.log(user1);
var user2 = new User("appu", "gupta");
user2.fullName();
console.log(user2);
