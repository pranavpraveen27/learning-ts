"use strict";
// let greetings:string="hi PraNaV"
// greetings.toLowerCase();
// console.log(greetings)
// let userId:number=334477.8
// console.log(userId)
// let isLogin:boolean=false;
// let num=444
// num.toFixed()
// // num="pranav"
//this code is correct in ts as type is not defined for hero
// let hero;
// function getHero(){
//     return 10
// }
// hero=getHero();  //here since type is not defined so it is any bydefault
// let hero:string;
// function getHero(){
//     return "pranav"
//     // return 10
// }
// hero=getHero();  //here since type is not defined so it is any bydefault
//functions
// function addTwo(num:number){
//     return num+2
// }
// addTwo(5)
// function signUpUser(name:string, isMarried:any,age:number){
//     console.log(name, isMarried, age)
// }
// signUpUser("pranav", "eiroer",55 );
//default values must come after required ones,,,, here it is wrong as name comming at first
// function signUpUserDefault(name:string="john doe", isMarried:any,age:number){
//     console.log(name, isMarried, age)
// }
// signUpUser("eiroer",55 );
//if using default at first, then have to give all parameters
// function signUpUserDefault(isMarried:any,age:number, name:string="john doe"){
//     console.log(name, isMarried, age);
// }
// signUpUserDefault("55",69, "eiroer" );
// function signUpUserDefault(isMarried:any,age:number, name:string="john doe"){
//     console.log(name, isMarried, age);
//     return "hello";
// }
// signUpUserDefault("55",69, "eiroer" );
// function addTwo(num:number):number{
//     return num+2;
// }
// console.log(addTwo(5))
// const getHello=(str:string):string=>{
//     return "hello "+str;
// }
// const heros=["thor", "spiderman", "ironman"];
// heros.map((hero):string=>{
//     return `hero is ${hero}`;
// })
// function handleError(errMsg:string):never{
//     throw new Error(errMsg)
// }
// handleError("error_msg")
//function taking object and returning obj
// type userInput={
//     name:string;
//     age:number;
// }
// type userOutput={
//     name:string;
//     price:number;
// }
// const createUser=({name, age}:userInput):userOutput=>{
//     return {
//         name:name.toLocaleUpperCase(),
//         price:age*2
//     }
// }
// const user=createUser({name:"pranav", age:69});
// console.log(user)
// const sumDiff=({x, y}:{x:number; y:number}):{sum:number; diff:number}=>{
//     return {
//         sum:x+y,
//         diff:x-y
//     };
// };
// // console.log(sumDiff({10, 20})) wrong syntax
// console.log(sumDiff({x:10, y:20}))
// type userRole="admin"| "user" | "guest"
// type userInput={
//     name:string;
//     role:userRole;
// }
// const assignRole=({name, role}:userInput):string=>{
//     return `${name} is a ${role}`;
// }
// assignRole({name:"pranav", role:"admin"});
// readonly
// type User={
//     readonly _id:string;
//     name:string;
//     age:number;
//     creditCard?:number ;  //this field is optional
// }
// let myuser:User={
//     _id:"111",
//     name:"pranav",
//     age:25
// }
// myuser.age=myuser.age+55;
// console.log(myuser)
// myuser.age=this.age+23;1     
// In JavaScript (and TypeScript), this only works inside class methods or object functions, where this has context. But in your code, you're just in the global scope, so:
/*
class User {
  age: number = 21;

  growOlder() {
    this.age += 1; // ✅ 'this' refers to the class instance
  }
}
 */
// myuser._id="444"  cannot assign value ot readonly
// type cardNumber={
//     cardNum:number
// }
// type cardDate={
//     cardD:string
// }
// type cardDetail=cardNumber & cardDate & {  //combining two existing types to create a new type
//     cvv:number
// }
// let creditCard:cardDetail={
//     cardNum:5555,
//     cardD:"153434",
//     cvv:123
// }
//array
// const numsArr:number[]=[]
// numsArr.push(55)
// numsArr.push(56)
// type User={
//     name:string;
//     age:number;
// }
// const allUsers:User[]=[]
// allUsers.push({name:"pranav", age:55})
// console.log(allUsers)
//union is combination of two or more type of data
let login;
login = "pranav123";
login = 9508616505;
// let arr: string | number[]; // WRONG — either string OR number[]
let arr; // Correct — array of string or number values
arr = ["hi", 1, 2, "bye"];
// given two below are not same,,,
// let arr1:number[] | string[]=[] and let arr1:(number | strig)[]=[]
/*
function greet(user: string | string[]) {
  if (typeof user === "string") {
    console.log(`Hello, ${user}!`);
  } else {
    console.log(`Hello, ${user.join(" and ")}!`);
  }
}
greet("Pranav");               // Hello, Pranav!
greet(["Pranav", "ChatGPT"]);  // Hello, Pranav and ChatGPT!

*/
// tuple>>>array holding fixed size elements in same order as defined
// let user:[string,number]=[69, "pranav"]  ***incorrect bcz of order
// const user:[string, number]=["pranav", 69];
// const showUser=(val:[string, number])=>{
//     console.log(`user name is ${val[0]} and age is ${val[1]}`)
// }
// showUser(user)
// type User=[string, number]
// let user:User=["pranav", 69]
// user.push(true)
/*
note that values can be changed means user[0]="vaishnavi"

even the fuckiest thing is methods like push() , shift() etc works here which is a bad thing,,,,
ex- user.push(true)  this is will not throw error as told by hitesh chaudary @2:14:00


SO ONLY USE readonly TUPLES TO AVOID RE-ASSIGNMENT
type Coordinates = readonly [number, number];

const point: Coordinates = [19.123, 72.456];
point[0] = 0; // ❌ Error: Cannot assign to '0' because it is a read-only property

*/
//  enum SeatChoice{     by default, first is 0 and later 1,2,3.....
//     AISLE,
//     MIDDLE, 
//     WINDOW
//  }
//  enum SeatChoice{
//     AISLE=10,
//     MIDDLE=22, 
//     WINDOW     //window will be 23 by default
//  }
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice["MIDDLE"] = "middle";
    SeatChoice["WINDOW"] = "window";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
    SeatChoice[SeatChoice["FIFTH"] = 1] = "FIFTH"; //bydefault, fifth will be 1
})(SeatChoice || (SeatChoice = {}));
const seat = SeatChoice.WINDOW;
console.log(seat);
