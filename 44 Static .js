class Person{
    constructor(fName,lName, age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    static fullName(){
        console.log("This is static class");
    }
    static hobby="coding";
    get about(){
        return `${this.fName} is ${this.age} Years old`;
    }
}
const user1=new Person("Siraj","Khan", 18);
console.log(user1.about); //  No--> ()
Person.fullName();
console.log(Person.hobby);