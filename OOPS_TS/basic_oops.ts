
// 1. Simple class
class Animal {
    constructor(public size : string, public legs : number){
        this.size = size
        this.legs = legs
    }

    getSize() {
        return this.size
    }
}

const dog = new Animal("small",4)
console.log(dog.getSize())
console.log(dog.legs)

// 2.Public, Private, and Protected Access Modifiers

// Public is default access modifier, accessed from anywhere
// Private : members only accessed within the class
// Protected : members can be accessed within the class and subclass

class Employee {
    constructor(public name : string, private age : number, protected salary : number){
        this.name = name,
        this.age = age,
        this.salary = salary
    }

    getDetails(){
        return this.age
    }
}

const e1 = new Employee("e1",23,2000)

class Manager extends Employee{

     constructor(name : string, age : number, salary : number, public signature : string){
        super(name, age, salary)
        this.signature = signature
     }

     getManagerDetails() {
        return {
            salary : this.salary,
            signature : this.signature
        }
     }
}

const m1 = new Manager("prem",24, 10000, "PK")
console.log(m1.getManagerDetails())

// Summary
// Public : accessable from anywhere
// Protected : accessable from within class and within subclass
// Private : only accessble within class
// Access : Public > Protected > Private


// we can also apply these to methods also.
// There will be requirements where subclass calls the superclass methods


// 3. inheritence

class Dog extends Animal{
    constructor(public size : string, public legs : number, public breed : string){
        super(size, legs)
        this.breed = breed
    }

    bark(){
        console.log("bow...." )
    }
}

const newDog = new Dog("big",4,"German")
newDog.bark();
newDog.getSize();

// Here Dog class inherits from Animal, all the public methods and variables can be accessed with Dog class


// 4. Getters and Setters 

// Getters and setters are for private variables where we can set value by adding more proctection like validations

// Tip : if you want to keep same variable name then no need to initialize at the starting. if you need different name then initialize it

class Circle{
    private _radius : number
    constructor(radius : number){
        this._radius = radius
    }

    get radius(): number{
        return this._radius
    }

    set radius(value:number) {
        if(value < 0){
            throw new Error("Value must be positive")
        }
        this._radius = value
    }
}


// 5. Static methods and Static variables

// Static methods and variables can be accessed via class , no need of instance, and available across all instances

class Human {
    static noOfEyes:number = 2

    static smile(){
        console.log("Smiling")
    }
}

Human.smile()


// 6. Abstract class

// Abstract classes cannot be instanciated directly rather it can be extended by other classes
// Abstract methods in Abstract classes denoted, the child/subclass should implement the abstract class
// We can have both abstract and non abstract methods

abstract class Shape {
    abstract getArea() : number

    greet(){
        console.log("hello")
    }
}

// It is more like a interface with parent class capabilities to add default functionalities


// 7. interfaces

// interfaces provide 100% abstraction where we can define what methods needs to be there inside the class
// class implements multiple interfaces
// extends followed by implements in the order

interface ICar {
    move() : void
}

class Car implements ICar{
    move(){
        console.log("moving")
    }
}

// 8. Method Overloading

// in Typescript method overloading is not traditional like python or java, in TS we can do it by type checking of input arguments

// 9. Class expression

const PersonClass = class {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};



