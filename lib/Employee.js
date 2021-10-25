class Employee{
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
    employeename(){
    return this.name;

    }

    employeeid(){
        return this.id;
    }

    employeeemail(){
        return this.email;
    }

    getEmployeeRole(){
        return "Employee";
    }
}
module.exports = Employee