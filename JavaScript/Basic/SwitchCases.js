// Create an application with following rules
//admin - get full access
//subadmin - gets access to create/ delete courses
//testprep - gets access to create/ delete tests
//user - gets access to consume content

var user = "admin";

switch (user) {
  case "admin":
    console.log("Admin here");
    break;
  case "subadmin":
    console.log("subadmin here");
    break;
  case "testprep":
    console.log("testprep here");
    break;
  case "user":
    console.log("user here");
    break;
  default:
    console.log("trial user");
    break;
}

var app = "2";
// console.log("2" + app);

// var a = Math.round(app);
// console.log(a);
