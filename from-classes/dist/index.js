"use strict";
/*class User{
    email:string;
    name:string;
    private readonly city:string="delhi"; //we can make private and it cannot be accessed anywhere instead outside the class,,,in js, we make private by using # i.e. #name
    constructor(email:string, name:string){
        this.email=email;
        this.name=name;
    }
}


const pranav=new User("pranav@gmail.com", "pranav")
console.log(pranav)
// console.log(pranav.city) not possible bcz private cannot be accessed outside the class
*/
class User {
    deleteToken() {
        console.log("token deleted");
    }
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._noOfCourses = 1;
        this.landArea = 6;
        this.city = "Jaipur";
    }
    get getnoOfCourses() {
        return this._noOfCourses;
    }
    set setNoOfCourses(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than one");
        }
        this._noOfCourses = courseNum;
    }
    set setDeleteToken(user) {
        user.deleteToken();
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
        this.landArea = 7;
    }
    set setNoOfCourses(courseNum) {
        // this._noOfCourses=5 cannot do bcz of private
    }
}
/*
interface       vs      class       vs          types

interface	TS-only feature to define the shape of an object (like contracts)	Define structure for objects or classes

type	A way to define custom types (union, intersection, object types, etc.)	Create complex types (functions, objects, tuples, etc.)

class	Real JavaScript construct — can hold data + behavior (OOP-style)	When you need logic, methods, and instances



Feature	interface	type	class
TS-only or JS?	✅ TS-only	✅ TS-only	❌ Real JS
Extending	✅ With extends	✅ With & (intersection)	✅ With extends
Implements	✅ Used by classes	❌	✅ Implements interface
Objects	✅ Best suited	✅ Works	✅ With constructor
Union/Intersection	❌	✅ Yes	❌
Runtime Code	❌ Removed in JS	❌ Removed	✅ Compiled to JS
Add to later	✅ Yes (reopen)	❌	❌
Functions	✅ Define signature	✅ Works	✅ Inside class body
Methods	❌ Only signature	❌ Only signature	✅ With body
typeof usable	❌	✅	✅



interface Animal {
  name: string;
  sound(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sound() {
    console.log("Bark");
  }
}


type Admin = {
  role: "admin";
};

type User = {
  name: string;
};

type AdminUser = Admin & User; // Intersection

*/
//implements means the class must define those properties/methods in the class.
//Interfaces do not generate JS code — they are contracts only.
// interface TakePhoto{
//     cameramode:string;
//     filter:string;
//     burst:number;
// }
// interface Story{
//     createStory():void
// }
// class Insta implements TakePhoto, Story{
//     constructor(
//         cameramode:string,
//         filter:string,
//         burst:number,
//     ){}
// }
// class YT implements TakePhoto{
//     constructor(
//         cameramode:string,
//         filter:string,
//         burst:number,
//         shorts:string
//     ){}
// }
/*
interface TakePhoto{
    cameramode:string;
    filter:string;
    burst:number;
}
interface Story{
    createStory():void
}



class Insta implements TakePhoto, Story{
    cameramode:string;
    filter:string;
    burst:number;
    createStory(): void {
        
    }
    constructor(
        cameramode:string,
        filter:string,
        burst:number,
    ){
        this.cameramode=cameramode;
        this.filter=filter;
        this.burst=burst;
    }
}


class YT implements TakePhoto{
    cameramode:string;
    filter:string;
    burst:number;
    constructor(
        cameramode:string,
        filter:string,
        burst:number,
        shorts:string
    ){
        this.cameramode=cameramode;
        this.filter=filter;
        this.burst=burst;
    }
}*/
/*
class Facebook implements TakePhoto{  //this is throwing error only bcz of strict mode of ts ,,,not bcz of interface as it implements all properties of TakePhote
    cameramode:string;
    filter:string;
    burst:number;
    // constructor(
    //     cameramode:string,
    //     filter:string,
    //     burst:number,
    //     shorts:string
    // ){
    //     this.cameramode=cameramode;
    //     this.filter=filter;
    //     this.burst=burst;
    // }
}
*/
//abstract class >>>we cannot create object directly from abstract class,,,only class that is extending it will create an object,,,,only abstract class can have abstract methods or properties
/*
Rules of super():
super() must be called before this in the child constructor.

Arguments passed to super() must match what the parent constructor expects.
*/
// class TakePhoto{
//     constructor(cameraMode:string, burst:number){};
// }
// let obj=new TakePhoto("front", 3);
class TakePhoto {
    constructor(cameraMode, burst) { }
    ;
}
// let obj=new TakePhoto("front", 3); cannot create an object of abstract class
class Insta extends TakePhoto {
    getFilter() { } //bcz this method is abstract so mendatory to implement in child class
    constructor(cameraMode, filter, burst) {
        super(cameraMode, burst); //super() is used in child classes to call the constructor of the parent class (aka the base class). This is mandatory in TypeScript when the parent class has its own constructor. 
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
//more clear examples - template
class Animal {
    constructor(species) {
        this.species = species;
        console.log("Animal constructor called");
    }
}
class Dog extends Animal {
    sound(s) {
        console.log(s);
    }
    eat(food) {
        return `i am eating ${food}`;
    }
    constructor(breed, species) {
        super(species);
        this.breed = breed;
        console.log("Dog constructor called");
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side ** 2;
    }
    else
        return shape.length * shape.width;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultShape = shape;
            return _defaultShape;
    }
}
