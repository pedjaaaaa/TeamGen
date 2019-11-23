require inquirer = require("inquirer");
require fs = require("fs");


const questions [{
    type: "list",
    message: "What is your job role?",
    name: "title",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
},
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    },

 

const studentQuestion [{
    type: "input",
    name: "school",
    message: "What school are you attending?",

}];

const engineerQuestion [{

    type: "input",
    name: "github",
    message: "What is your Github username?"
    
}];


inquirer.prompt(questions)
    .then(function (data) {

    })

// The first class is an `Employee` parent class with the following properties and
// methods:
class Employee {
    constructor(name, id, title) {
        this.name = name,
            this.id = id,
            this.title = title,
    }

    getName() {
    }
    getId() {
    }
    getEmail() {
    }
    getRole() {
        return this.title;
    } // Returns 'Employee'
};
// In addition to `Employee`'s properties and methods, `Manager` will also have:
class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber,
    }

    getRole(),
};
// In addition to `Employee`'s properties and methods, `Engineer` will also have:
class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github,
    }
    getGithub(),

    getRole(), // Overridden to return 'Engineer'
};
// In addition to `Employee`'s properties and methods, `Intern` will also have:
class Intern {
    constructor(school) {
        super();
        this.school = school,
    }
    getSchool(),
    getRole(), // Overridden to return 'Intern'
}
// ### User input

// The project must prompt the user to build an engineering team. An engineering
// team consists of a manager, and any number of engineers and interns.

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

//   * Name
//   * Role
//   * ID
//   * Role-specific property (School, link to GitHub profile, or office number)