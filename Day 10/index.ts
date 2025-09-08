"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 10;
console.log(x);
// types (we cannot change the type of variable)
var n = "malak";
n = "";
var w;
w = 19;
w = " .";
var nam = "malak";
// datatype
// permitive (string number boolean)
// nonpermitive (array _ linkedlist _ enum)
var arr = ["malak", "sobhy"];
arr[2] = "walaa";
console.log(arr);
var ar = [10, 10];
// union type
var arr2;
arr2 = ["ma", 1];
var z;
var names;
names = [" a", 10, " a"];
var obj = { id: 1, name: "ali", age: 25 };
obj.age = 10;
var user = { id: 10, name: "doaa", age: 21 };
function sum(a, b, c) {
    console.log(a + b);
}
sum(10, 10);
// implement
function s(a, b, c, d) {
    if (typeof a === "number" &&
        typeof b === "number" &&
        typeof c === "undefined" &&
        typeof d === undefined) {
        console.log(a + b);
    }
    else if (typeof a === "string" &&
        typeof b === "string" &&
        typeof c === "string" &&
        typeof d === undefined) {
        return a + b + c;
    }
    else if (typeof a === "number" &&
        typeof b === "number" &&
        typeof c === "number" &&
        typeof d === "number") {
        return a + b + c + d;
    }
    else {
        return 0;
    }
}
function ch(c, c2, c3, c4) {
    if (typeof c3 === "undefined" && typeof c4 === "undefined") {
        return c && c2;
    }
    else if (typeof c3 === "boolean" && typeof c4 === "undefined") {
        return (c && c2) || c3;
    }
    else if (typeof c3 === "boolean" && typeof c4 === "boolean") {
        return (c && c2) || (c3 && c4);
    }
    else
        return false;
}
// function display(obj: objType, num: number) {
//   console.log(obj);
// }
// generics
function send(a) {
    console.log(a);
}
send("malak");
send(1);
function display(a, b) {
    console.log(a, b);
}
display("malak", 20);
// this in js
// class Invoce{
//     name:"malak"
//     age:25
//     constructor (name ,age){
//         this.age =age
//         this.name =name
//     }
// }
// var t =new Invoce("m" ,1)
// ts
var Invoce = /** @class */ (function () {
    function Invoce(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    return Invoce;
}());
var t = new Invoce("esraa", 21, 300);
t.name = "hassan";
// error bec age is readonly
// t.age =40
var inv = [t];
console.log(inv);
var rectangle = /** @class */ (function () {
    function rectangle() {
    }
    rectangle.prototype.calcArea = function () {
        return 0.5 * this.dim * this.dim;
    };
    rectangle.prototype.calcPriemter = function () {
        return this.dim * 4;
    };
    return rectangle;
}());