// TODO: Write code to define and export the Employee class
// ! employee class with name, id, and email
// ? classes are just different versions of constructer functions. object blueprint
class Employee {
  // * passes in the paramaters to store in the object when new Employee is run.
  constructor(name , id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // * methods to return data
  getName() {
      return this.name;
  }
  getId() {
      return this.id;
  }
  getEmail() {
      return this.email;
  }
  getRole() {
      return "Employee";
  }
}

// * define a new instance of class
let newEmployee = new Employee("jeff", "1077", "lang.jeffrey@gmail.com");
// * console.logs new instance of class
console.log(newEmployee);

// export module for use in other files
module.exports = Employee;