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
class Insta {
    createStory() {
    }
    constructor(cameramode, filter, burst) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YT {
    constructor(cameramode, filter, burst, shorts) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
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
