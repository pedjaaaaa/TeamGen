const Employee = require ("./Employee");

class Engineer extends Employee{
    constructor(name='null', id=0, email = 'null',github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;