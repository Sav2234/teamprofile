class Intern{
    constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
    // internname(){
    // return this.name;

    // }

    // internid(){
    //     return this.id;
    // }

    // internemail(){
    //     return this.email;
    // }

    getRole(){
        return "Intern";
    }

    internschool(){
        return this.school;
    }
}
module.exports = Intern