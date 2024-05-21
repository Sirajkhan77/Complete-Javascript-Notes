class Person{
    constructor(fName,lName, age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    get about(){
        return `${this.fName} is ${this.age} Years old`;
    }

    // We want to pass 'Siraj Younis' and it should automatically assign 'siraj' to fname and 'Younis' to lName
    set fullName(fullName){
        const [x,y] = fullName.split(" ");
        this.fName=x;
        this.lName=y;
    }
}
const user1=new Person("Umer","Farooq", 1);
console.log(user1.about);   /// () ---> No need
// Hence it will make function like a property like name and age 

user1.fullName="Siraj Younis";
console.log(user1.fName);
console.log(user1.lName);

