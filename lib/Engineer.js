class Engineer{
    constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    }
    engineername(){
    return this.name;

    }

    engineerid(){
        return this.id;
    }

    engineeremail(){
        return this.email;
    }

    getEngineerRole(){
        return "Engineer";
    }

    engineergithub(){
        return this.github;
    }
}
module.exports = Engineer