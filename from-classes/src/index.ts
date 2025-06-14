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





class User{
    private _noOfCourses:number=1;
    protected landArea=6;
    readonly city:string="Jaipur"
    private deleteToken(){
        console.log("token deleted")
    }
    constructor(
        public email:string,
        public name:string,
        private userId:string
    ){

    }

    get getnoOfCourses():number{  //getter method to access private keys
        return this._noOfCourses
    }


    set setNoOfCourses(courseNum:number){  //*****in case of setter, there should not be any return type not even void or any bcz ts will fuck u
        if(courseNum<=1){
            throw new Error("course count should be more than one");
        }
        this._noOfCourses=courseNum;
    }


    set setDeleteToken(user:User){
        user.deleteToken();
    }

}


class SubUser extends User{  //in inheritence, private property cannot be accessed by child classs
    isFamily:boolean=true;
    set setNoOfCourses(courseNum: number) {
        // this._noOfCourses=5 cannot do bcz of private
        
    }

    protected landArea: number=7;
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



abstract class TakePhoto{


    constructor(cameraMode:string, burst:number){};

    abstract getFilter():void; //abstract method means i am not going to provide defination
}
// let obj=new TakePhoto("front", 3); cannot create an object of abstract class

class Insta extends TakePhoto{
    getFilter(): void {}  //bcz this method is abstract so mendatory to implement in child class
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode, burst)  //super() is used in child classes to call the constructor of the parent class (aka the base class). This is mandatory in TypeScript when the parent class has its own constructor. 
    }
}





//more clear examples - template
abstract class Animal {
  abstract sound(s:string):void //abstract method cannot have implementation,,,only declaration and child class has must to implement it
  abstract eat(food:string):string
  constructor(public species: string) {
    console.log("Animal constructor called");
  }
}
class Dog extends Animal {
    sound(s: string): void {
        console.log(s)
    }
    eat(food:string):string{
        return `i am eating ${food}`
    }
  constructor(public breed: string, species: string) {
    super(species); 
    console.log("Dog constructor called");
  }
}






//incomplet,,,,do gpt to learn more
//generics >>> it will take any value and then lock it,,,returns same value means
// function identity<Type>(val:Type):Type{
//     return val;
// }
// interface Bootle{
//     brand:string,
//     type:number
// }

// // identity<Bootle>({});

// function loggingIdentity<T>(arg:T[]):T[]{
//     console.log(arg.length);
//     return arg;
// }

// function getSearchedProducts<T>(products:T[]):T{

//     return products[0]; //return first product,,,as return type is T not T[]
// }



// const getMoreProducts=<T,>(products:T[]):T=>{  //arrow function example

//     return products[0];
// }

// const getName=(names:string[]):string=>{

//     return names[0];
// }


// function moreGenerics<T, U> (val1:T[], val2:U):object{

//     return {
//         val1,
//         val2
//     }
// }

// function moreGenerics<T, U extends string> (val1:T, val2:U[]):object{

//     return {
//         val1,
//         val2
//     }
// }
// moreGenerics(5, ["pranav", "vaishnavi"]); 





// ****important 
// interface Database{
//     connection:string;
//     username:string;
//     time:number
// }
// function moreGenerics<T, U extends Database> (val1:T, val2:U[]):object{
//     console.log({val1, val2})
//     return {
//         val1,
//         val2
//     }
// }
// let db1:Database={
//     connection:"https:....",
//     username:"pranav",
//     time:69
// }
// moreGenerics("69",[db1])








//type narrowing

// function detectType(val:number|string):(number|string){
//     if(typeof val==="string")return val.toLowerCase();
//     else return val+69;
// }


// function detectType(val:number|string):(number|string){
//     if(typeof val==="string")return val.toLowerCase();
//     else return val+69;
// }


// function printAll(strs:string|string[] | null){
//     if(strs){
//         if(typeof strs==="object"){
//             for(const s of strs) console.log(s);
//         }
//         else if(typeof strs==="string") console.log(strs.toUpperCase());
//     }
// }




/*
//in operator in narrowing

interface User{
    name:string,
    email:string
}
interface Admin{
    name:string;
    email:string;
    isAdmin:boolean;
}

function isAdmin(account:User|Admin){  //in operator
    if("isAdmin" in account){
        return account.isAdmin;
    }
    
}





// instance of narrowing >>>if there is potential of new keyword ,then we check through instanceOf
function logValue(x:Date|string){     //new Date()
    if(x instanceof Date){
        console.log(x.toLocaleDateString());
    }else{
        console.log(x.toUpperCase())
    }
}




type Fish={
    swim:()=>void
}

type Bird={
    fly():void
}

function isFish(pet:Fish | Bird){
    if((pet as Fish).swim!==undefined) return true;
}

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet  //here if we donot return pet as fish in isFish method, then whether pet is fish or bird , it isnot identified so
        return "fish food"
    }
    else {
        pet
        return "bird food"
    }
}
    */





// discriminated unions
interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    length:number;
    width:number;
}

type Shape=Circle | Square | Rectangle

function getTrueShape(shape:Shape){
    if(shape.kind==="circle"){
        return Math.PI *shape.radius**2;
    }
    else if(shape.kind==="square") {
        return shape.side**2;
    }
    else return shape.length*shape.width;
}





function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI *shape.radius**2;
        
        case "square":
            return shape.side**2;

        case "rectangle":
            return shape.length*shape.width;

        default:
            const _defaultShape:never=shape
            return _defaultShape;
    }
}