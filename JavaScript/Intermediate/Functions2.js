// Create an application with following rules
//admin - get full access
//subadmin - gets access to create/ delete courses
//testprep - gets access to create/ delete tests
//user - gets access to consume content
//other - trial user

function userrole(name, role) {
  switch (role) {
    case "admin":
      return `${name} get full access`;
      break;
    case "testprep":
      return "gets access to create/ delete tests";

    case "subadmin":
      return "gets access to create/ delete courses";

    case "user":
      return "gets access to consume content";
    default:
      return "trial user";
  }
}

console.log(userrole("Apurv", "testprep"));
