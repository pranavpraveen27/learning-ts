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
let hero;
function getHero() {
    return "pranav";
    // return 10
}
hero = getHero(); //here since type is not defined so it is any bydefault
const assignRole = ({ name, role }) => {
    return `${name} is a ${role}`;
};
assignRole({ name: "pranav", role: "admin" });
