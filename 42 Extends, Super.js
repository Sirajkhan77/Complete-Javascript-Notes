class animals{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    about(){
        console.log(`${this.name} is ${this.age} Years old`);
    }
    isCute(){
        if (this.age<=1){
            console.log("Yes cute");
        }else{
            return false;
        }
    }
}
const cat=new animals("Cat", 1);
cat.about();
cat.isCute();


///////////////////// What is we are asked to make another class for birds 

class birds extends animals{};
const supparow=new birds("Black Supparow", 2);
supparow.about();

/// Make another class with extra features 

class hourse extends animals{
    constructor(name, age,speed){
        super(name, age);
        this.speed=speed;
    }
    run(){
        return `${this.name} is Running at ${this.speed} kmph.`;
    }
}

const hourse1=new hourse("Ertugrul's hourse", 10, 55);
console.log(hourse1.run());