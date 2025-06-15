/*
number, string, boolean, any, unknown, unknown, null, undefined
*/

// const myName:string="pranav";

// let data: any = "could be anything";
// data = 42;



// Custom type guard + unknown usage
/*
What does val is string mean?
This isn't just a return type like boolean. It’s called a type predicate in TypeScript. It tells TypeScript:

“Yo TypeScript, if this function returns true, then you can safely treat val as a string from now on.”
*/
/*
function isString(val: unknown): val is string {
  return typeof val === "string";
}


function isArray(val: unknown): val is unknown[] {
  return Array.isArray(val);
}
const data: unknown = [1, 2, 3];
if (isArray(data)) {
  console.log(data.length); // TS knows it's an array now
}




function printLength(input: unknown): void {
  if (isString(input)) {
    console.log("Length:", input.length);
  } else {
    console.log("Not a string!");
  }
}




function stringify(value: string | number | boolean): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toFixed(2);
  if (typeof value === "boolean") return value ? "true" : "false";

  // If you add a new type later, TS will throw error here (good!)
  return "";
}




// let score: number = null; // ❌ Error in strict mode

// ✅ Correct:
let score: number | null = null;

*/





//interfaces and type alias
// interface User {
//   name: string;
//   age: number;
// }

// const u = { name: "Pranav", age: 22, extra: true }; 
// let person: User = u; // ✅ allowed (extra prop is ignored unless exact match enforced)





// interface User {
//   id: number;
//   name: string;
//   email?: string;            // optional
//   readonly createdAt: Date;  // cannot change
// }

// const user1: User = {
//   id: 1,
//   name: "Pranav",
//   createdAt: new Date()
// };

// user1.email = "test@example.com";     // ✅
// user1.createdAt = new Date();         // ❌ Error! readonly






// type User = {
//   id: number;
//   name: string;
//   email?: string;
//   isActive: boolean;
// };
// function greetUser(user: User): string {
//   return `Welcome, ${user.name}`;
// }
// const userObj: User = {
//   id: 101,
//   name: "Pranav",
//   isActive: true,
// //   age:56        it not allow extra keys
// };

// console.log(greetUser(userObj)); // Welcome, Pranav






// interface User {
//   id: number;
//   name: string;
// }

// interface Admin extends User {
//   role: "admin" | "moderator";
// }

// const adminObj: Admin = {
//   id: 1,
//   name: "Pranav",
//   role: "admin"
// };






// type User = {
//   id: number;
//   name: string;
// };

// type Timestamps = {
//   createdAt: Date;
//   updatedAt: Date;
// };

// type FullUser = User & Timestamps;

// const full: FullUser = {
//   id: 1,
//   name: "Pranav",
//   createdAt: new Date(),
//   updatedAt: new Date()
// };








//must place optional parameters after required ones
// function welcome(name: string, age?: number): string {
//   return age ? `${name}, age ${age}` : `${name}`;
// }



//rest parameters
// function logSkills(dev: string, ...skills: string[]) {
//   console.log(`${dev} knows:`, skills.join(", "));
// }
// logSkills("Pranav", "React", "Node", "Mongo");




//function overloads
/*
Function overloading in TypeScript lets you define multiple function signatures for a single function implementation.
It’s not like Java-style overloading at compile time—this is type-level overloading.


why method overloading??????????
Different param types (e.g., string vs number)
Different param counts
Return different types
*/
// function add(a: number, b: number): number;
// function add(a: number, b: number, c: number): number;
// function add(a: number, b: number, c?: number): number {
//   return c !== undefined ? a + b + c : a + b;
// }


// function greet(person:string):string;
// function greet(person:string, age:number):string;
// function greet(person:string, age?:number):string{
//     return age?"hi person and age":"hi person"
// }




// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: number | string, b: number | string): any {
//   if (typeof a === "string" && typeof b === "string") return a + b;
//   if (typeof a === "number" && typeof b === "number") return a + b;
//   throw new Error("Invalid argument types");
// }

// console.log(add(1, 2));       // 3
// console.log(add("hi", "JS")); // "hiJS"





// Strict Null Checks in Callbacks
// function process(value: string | null, cb: (data: string) => void): void {
//   if (value !== null) {
//     cb(value); // ✅ safe
//   }
// }


// function execute(callback: (x: number, y: number) => number): void {
//   console.log("Result:", callback(5, 10));
// }
// const sum = (a: number, b: number): number => a + b;
// execute(sum); // Result: 15




// let fun(cb:(x:number, y:number)=>number):number=>{
//     return cb(x, y);
// }
// let cb=(x:number, y:number):number=>{
//     return x+y;
// }
// console.log(fun(cb(5,10)));  //calling function cb gives number and then passing it so issue




// function fun(cb: (x: number, y: number) => number, x: number, y: number): number {
//     return cb(x, y);
// }
// const cb = (x: number, y: number): number => {
//     return x + y;
// }
// console.log(fun(cb, 5, 10)); // ✅ Outputs: 15






// Typing a function that receives another function
// function runTwice(cb: (x: number) => number): number {
//   return cb(cb(2));
// }
// const double = (n: number) => n * 2;
// console.log(runTwice(double)); // 8





// function report(id: string, ...flags: (string | number)[]) {
//   console.log(`ID: ${id}`);
//   console.log("Flags:", flags);
// }
// report("U001", "active", 10, "warn");





// function greet(id: number, name?: string): string {
//   return `Hi ${name}`;
// }
// console.log(greet(5));




// // How do you ensure a callback only runs if input isn’t null
// function safeCall(x: string | null, cb: (val: string) => void) {
//   if (x !== null) cb(x);
// }




// function run<T>(data: T, fn: (input: T) => void): void {
//   fn(data);
// }

// run("Hello", (s) => console.log(s.toUpperCase()));
// run([1, 2, 3], (arr) => console.log(arr.length));





// function multiplier(factor: number): (val: number) => number {
//   return (val) => val * factor;
// }

// const double = multiplier(2);
// console.log(double(5)); // 10







//generics
// function printId<T extends { id: number }>(obj: T) {
//   console.log(obj.id);
// }


// interface Repository<T> {
//   create(item: T): void;
//   update(id: string, item: T): void;
//   delete(id: string): void;
//   getById(id: string): T | null;
//   getAll(): T[];
// }
// type User = {
//   id: string;
//   name: string;
//   email: string;
// };

// class UserRepo implements Repository<User> {
//   private users: User[] = [];

//   create(user: User): void {
//     this.users.push(user);
//   }

//   update(id: string, updated: User): void {
//     const index = this.users.findIndex(u => u.id === id);
//     if (index !== -1) this.users[index] = updated;
//   }

//   delete(id: string): void {
//     this.users = this.users.filter(u => u.id !== id);
//   }

//   getById(id: string): User | null {
//     return this.users.find(u => u.id === id) || null;
//   }

//   getAll(): User[] {
//     return this.users;
//   }
// }






// function logNames<T extends { name: string }>(arr: T[]): void {
//   arr.forEach(item => console.log(item.name));
// }
// logNames([{ name: "Pranav" }, { name: "John" }]); // ✅
// // logNames([{ title: "No name" }]); // ❌ Error







// class State<T> {
//   private value: T;
//   constructor(initial: T) {
//     this.value = initial;
//   }
//   get(): T {
//     return this.value;
//   }
//   set(newVal: T): void {
//     this.value = newVal;
//   }
// }
// const counter = new State<number>(0);
// counter.set(10);
// console.log(counter.get()); // 10





// function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// const user = { name: "Pranav", age: 20 };
// const age = pluck(user, "age"); // TypeScript knows it's a number







/*
What is Type Inference?
TypeScript figures out the type automatically from context — no manual annotations needed.


let count = 42;        // inferred as number
let name = "Pranav";   // inferred as string
const isDev = true;    // inferred as boolean

function double(n: number) {
  return n * 2; // return type inferred as number
}

document.addEventListener("click", (e) => {
  e.preventDefault(); // ✅ TS knows e is a MouseEvent
});
You didn’t write e: MouseEvent — TS figured it out from "click"!

No need to write :number or :string — TS infers it from the initial value.

*/







// // Use as const to create literal types
// const directions = ["left", "right", "up", "down"] as const;

// type Direction = typeof directions[number]; 
// // "left" | "right" | "up" | "down"

// function move(dir: Direction) {
//   console.log(`Moving ${dir}`);
// }

// move("left");  // ✅
// move("down");  // ✅
// // move("top");   // ❌ Error: not assignable






// Custom object guard
// type User = {
//   id: number;
//   name: string;
//   email?: string;
// };
// function isUser(val: unknown): val is User {
//   return (
//     typeof val === "object" &&
//     val !== null &&
//     "id" in val &&
//     typeof (val as any).id === "number" &&
//     "name" in val &&
//     typeof (val as any).name === "string"
//   );
// }





// //dynamic form validator
// const userForm = {
//   name: "Pranav",
//   email: "hello@ts.dev",
//   age: 21,
//   isAdmin: false
// };
// type ValidationResult<T> = {
//   [K in keyof T]: boolean;
// };

// function validateForm<T extends Record<string, any>>(form: T): ValidationResult<T> {
//   const result = {} as ValidationResult<T>;

//   for (const key in form) {
//     const value = form[key];

//     // Example rule: string ≠ empty, number > 0, boolean always true
//     if (typeof value === "string") {
//       result[key] = value.trim().length > 0;
//     } else if (typeof value === "number") {
//       result[key] = value > 0;
//     } else if (typeof value === "boolean") {
//       result[key] = true; // allow all booleans
//     } else {
//       result[key] = false;
//     }
//   }

//   return result;
// }









// UNION Types (|)Value can be any one of multiple types.
// INTERSECTION Types (&)Value must satisfy all types at once.
type A = { name: string };
type B = { age: number };
type AB = A & B; // must have both name + age



//  Discriminated Unions (also called Tagged Unions) Use a common literal property (a "tag") to differentiate the union.

// type Circle = {
//   kind: "circle";
//   radius: number;
// };
// type Square = {
//   kind: "square";
//   side: number;
// };
// type Shape = Circle | Square;
// // Now, kind is the discriminant.





// type Circle = {
//   kind: "circle";
//   radius: number;
// };

// type Square = {
//   kind: "square";
//   side: number;
// };

// type Shape = Circle | Square;

// function getArea(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius * shape.radius;

//     case "square":
//       return shape.side * shape.side;

//     default:
//       // This makes sure all cases are handled!
//       const _exhaustiveCheck: never = shape;
//       throw new Error("Unhandled shape kind: " + (shape as any).kind);
//   }
// }
// const c: Circle = { kind: "circle", radius: 10 };
// const s: Square = { kind: "square", side: 5 };

// console.log(getArea(c)); // 314.15...
// console.log(getArea(s)); // 25


