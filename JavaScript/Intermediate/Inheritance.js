class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return { name: this.name, email: this.email };
  }
  login() {
    return "You are admin";
  }
}

class User2 extends User {
  constructor(name, email) {
    super(name, email);
  }
  getSubadminInfo() {
    return "Subadmin";
  }
}

const user = new User("appu", "abc.com");
console.log(user.getInfo());

const user2 = new User2("appuuuu", "woo.com");
console.log(user2.getInfo());
console.log(user2.getSubadminInfo());
