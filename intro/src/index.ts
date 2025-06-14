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




let hero:string;

function getHero(){
    return "pranav"
    // return 10
}

hero=getHero();  //here since type is not defined so it is any bydefault







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


