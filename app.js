//* local dependency constants 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const render = require("./lib/htmlRenderer");


//* npm package depencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//* .fs paths constants
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//* constants for questions arrays & employee types.
const employees = [];
const employeeRoles = ["Engineer", "Intern"]; // * array for types of employees to pass to inquirer
const allQuest = {
  manager: [ 
  //* name, id, email, officeNumber
  {
            name: 'name',       
            type: 'input',
            message: 'Please input the team members first name and last name.'
  },
  {
            name: 'id',       
            type: 'input',
            message: 'Please input the team members id.'
  },
  {
            name: 'email',       
            type: 'input',
            message: 'Please input the team members email.'
  },
  {
            name: 'officeNumber',       
            type: 'input',
            message: 'Please input the team members office number.'
  }, 
],
 engineer: [ 
  //* name, id, email, github
  {
            name: 'name',       
            type: 'input',
            message: 'Please input the team members first name and last name.'
  },
  {
            name: 'id',       
            type: 'input',
            message: 'Please input the team members id.'
  },
  {
            name: 'email',       
            type: 'input',
            message: 'Please input the team members email.'
  },
  {
            name: 'gihub',       
            type: 'input',
            message: 'Please input the team members github username.'
  }, 
],
intern:  [ 
  //* name, id, email, school
  {
            name: 'name',       
            type: 'input',
            message: 'Please input the team members first name and last name.'
  },
  {
            name: 'id',       
            type: 'input',
            message: 'Please input the team members id.'
  },
  {
            name: 'email',       
            type: 'input',
            message: 'Please input the team members email.'
  },
  {
            name: 'school',       
            type: 'input',
            message: 'Please input the team members office number.'
  }, 
],
};
//* function to launch manager questions



const employeeQuest = () => {
          //* prompt for adding an employee
            inquirer.prompt([
            {
            name: 'choice',  
            type: 'confirm',
            message: 'Would you like to add a team member?',
            },
          ])
          .then((answer) => {
            //* if true what role
            if(answer) {
              inquirer.prompt([
                {
                name: 'role',  
                type: 'list',
                message: 'What role?',
                choices: employeeRoles,
                },
              ])  
              .then((empl) => {
              questions(empl);
              })        
              } 
              else {
                console.log("Creating your HTML page\!"); 
                console.log(employees);
                render(employees);
              }
          });     
};

const questions = (empl) => {
   const qArray = this.empl;
  //* need way to extract questions from array.
  console.log(qArray);
  inquirer.prompt(qArray)
  .then((answer) => {
    employees.push(answer);
    console.log(answer);
    employeeQuest();
  });
  console.log(employees);

};

employeeQuest();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
