//Constructor for Manager object
//Extends from Employee class
const Employee = require("./employee");

class Manager extends Employee {
    //Get Employee Object name, ID, and email from extended class Employee
    constructor(name, id, email, title, officeNumber) {
        super(name, id, email, title);  
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getRole() {
        return "Manager";
    };
};
//Export to other files
module.exports = Manager;