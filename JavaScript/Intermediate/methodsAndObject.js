const user = {
  firstName: "Apurv",
  lastName: "Gupta",
  role: "admin",
  loginCount: 32,
  isFacebookLogin: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in ${this.courseList.length} courses`;
  },
  info: function () {
    return user;
  },
};
let users = user.getCourseCount();
console.log(users);
// console.log(user.getCourseCount());
console.log(typeof user);

user.buyCourse("React js");
user.buyCourse("Angular js");
user.buyCourse("Vue js");
// console.log(user.getCourseCount());
console.log(user.courseList);
// console.log(user.info());
