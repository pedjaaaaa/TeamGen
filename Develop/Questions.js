managerQuestions = [{
    type: "input",
    message: "Enter manager's name:",
    name: "manager",
    validate: async (input) => {
        if (input.length === 0 || !input.match(/[a-zA-Z]/i)) {
            console.log("\nPlease enter a valid name with only letters");
            return false;
        }
        return true;
    },
},
{
    type: "input",
    message: "Enter manager's ID:",
    name: "managerID",
    validate: async (input) => {
        if (!input.match(/^[0-9]+$/i)) {
            console.log("\nPlease enter a valid number ID");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter manager's email:",
    name: "managerEmail",
    validate: async (input) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(input).toLowerCase())) {
            console.log("\nPlease enter a valid email address");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter manager's office number:",
    name: "managerOffice",
    validate: async (input) => {
        if (!input.match(/^[0-9]+$/i)) {
            console.log("\nPlease enter a valid office number");
            return false;
        }
        return true;
    }
}],

pickTeam = {
    type: "list",
    message: "Pick next team member you want to add:",
    name: "pick",
    choices: ["Engineer", "Intern", "I am done adding team members"]
},

engineerQuestions = [
{
    type: "input",
    message: "Enter engineer's name:",
    name: "engineer",
    validate: async (input) => {
        if (input.length === 0 || !input.match(/[a-zA-Z]/i)) {
            console.log("\nPlease enter a valid name with only letters");
            return false;
        }
        return true;
    },

},
{
    type: "input",
    message: "Enter engineer's ID:",
    name: "engineerID",
    validate: async (input) => {
        if (!input.match(/^[0-9]+$/i)) {
            console.log("\nPlease enter a valid number ID");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter engineer's email:",
    name: "engineerEmail",
    validate: async (input) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(input).toLowerCase())) {
            console.log("\nPlease enter a valid email address");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter engineer's github username:",
    name: "engineerGithub",
    validate: async (input) => {
        if (input.length === 0) {
            console.log("\nPlease enter a valid github username");
            return false;
        }
        return true;
    }
}
],

internQuestions = [
{
    type: "input",
    message: "Enter intern's name:",
    name: "intern",
    validate: async (input) => {
        if (input.length === 0 || !input.match(/[a-zA-Z]/i)) {
            console.log("\nPlease enter a valid name with only letters");
            return false;
        }
        return true;
    },

},
{
    type: "input",
    message: "Enter intern's ID:",
    name: "internID",
    validate: async (input) => {
        if (!input.match(/^[0-9]+$/i)) {
            console.log("\nPlease enter a valid number ID");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter intern's email:",
    name: "internEmail",
    validate: async (input) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(input).toLowerCase())) {
            console.log("\nPlease enter a valid email address");
            return false;
        }
        return true;
    }
},
{
    type: "input",
    message: "Enter intern's school:",
    name: "internSchool",
    validate: async (input) => {
        if (input.length === 0) {
            console.log("\nPlease enter a valid school name");
            return false;
        }
        return true;
    }
}],

module.exports = managerQuestions;
module.exports = engineerQuestions;
module.exports = internQuestions;