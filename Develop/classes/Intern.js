const Employee = require ("./Employee");

class Intern extends Employee{
    constructor(name='null', id=0, email = 'null',school){
        super(name,id,email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;