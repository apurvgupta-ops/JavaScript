class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrolledList(name) {
    this.courseList.push(name);
  }

  getCourseList() {
    return this.courseList;
  }
}

const details = new User("Apurv", "abc@abc.com");
console.log(details.getInfo());

details.enrolledList("Reactjs");
details.enrolledList("Vuejs");
details.enrolledList("Angularjs");
const course = details.getCourseList();
// course.forEach((c) => console.log(c));
