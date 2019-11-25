const Employee = require ("./Employee");

class Manager extends Employee{
    constructor(name='null', id=0, email = 'null',officeNum){
        super(name,id,email);
        this.officeNumber = officeNum;
    }
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;