class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.loggedIn = false;
    this.password = "";

    if (
      name === undefined ||
      role === undefined ||
      (role !== "admin" && role !== "user")
    ) {
      alert("Невірно вказані дані!");
    }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  changeName(newName) {
    return (this.name = newName);
  }

  changePassword(newPassword) {
    return (this.password = newPassword);
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name, "admin");
    this.users = [];
  }

  addUser(name, role) {
    this.user = new User(name, role);
    this.users.push(this.user);
  }

  removeUser(user) {
    const userIndex = this.users.indexOf(user);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  changeUserRole(user, newRole) {
    if (newRole !== "admin" && newRole !== "user") {
      alert("Невірно вказана роль");
    } else {
      user.role = newRole;
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    return (this.users = []);
  }
}

const admin = new Admin("Petro", "admin");
console.log(`${admin.getName()}, ${admin.role}`);

admin.addUser("Ivan", "admin");
admin.addUser("Olena", "user");
admin.addUser("Maria", "user");
admin.changeUserRole(admin.users[2], "admin")
console.log(admin.getAllUsers());

const user = new User("Vasia", "user");
user.changePassword("123");
user.login();
console.log(
  `Користувач ${user.getName()} залогінений з паролем ${user.password}`
);
