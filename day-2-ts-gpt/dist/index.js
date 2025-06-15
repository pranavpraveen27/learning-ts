"use strict";
/*
number, string, boolean, any, unknown, unknown, null, undefined
*/
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
