//Constructor for Intern object
//Extends from Employee class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        //Get Employee Object name, ID, and email from extended class Employee
        super(name, id, email);
        //Assign school to "this" Employee object's school.
        this.school = school;   
    };
    //Return Employee's School
    getSchool() {
        return this.school;
    };
    //Return role as Intern
    getRole() {
        return "Intern";
    };
};
//Export to other files
module.exports = Intern;