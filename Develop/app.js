// The first class is an `Employee` parent class with the following properties and
// methods:
const employee = class Employee {
this.name = name;
this.id = id;
this.title = title;
getName();
getId();
getEmail();
getRole(); // Returns 'Employee'
};

// In addition to `Employee`'s properties and methods, `Manager` will also have:
const manager = class Manager {
    this.officeNumber = officeNumber
getRole()
};

// In addition to `Employee`'s properties and methods, `Engineer` will also have:
const engineer = class Engineer {
    this.github = github,
    getGithub(),
    getRole(), // Overridden to return 'Engineer'
};

// In addition to `Employee`'s properties and methods, `Intern` will also have:
const intern = class Intern {
    this.school = school;
getSchool();
getRole(); // Overridden to return 'Intern'
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