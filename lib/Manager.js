class Manager{
    constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
    }
    managername(){
    return this.name;

    }

    managerid(){
        return this.id;
    }

    manageremail(){
        return this.email;
    }

    getManagerRole(){
        return "Manager";
    }

    managerofficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager