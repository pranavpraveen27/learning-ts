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
}


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













