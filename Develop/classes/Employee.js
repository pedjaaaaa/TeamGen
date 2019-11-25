class Employee {
    constructor(name='null', id=0, email = 'null'){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        if (this.name === 'null') console.log(`Please define a valid name.`);
        else return this.name;
    }

    getId(){
        if (this.id === 0) console.log(`Please define a valid id.`);
        else return this.id;
    }

    getEmail(){
        if (this.email === 'null') console.log(`Please define a valid email.`);
        else return this.email;
    }

    getRole(){
        return "Employee";
    }
}

module.exports = Employee;