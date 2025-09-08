// // var vs let vs const

// const z = 3.4;
// // initialization
// var a;
// let k;
// a = 80;

// // redeclaring
// var x = 2;
// var x = 7;

// // let i = 10
// i = 5;
// // let i  xxxx

// //  hoisting
// // mean calling variables before initialization
// console.log(x);
// var x;

// // var can be hoistiong , but let cannot be
// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);

// var a = window.prompt();

// // functions types
// // 1-func statement can be hoisting
// // prob1 => sum(20,20,20) and no error appear in run or complied
// // prob2 => sum (10)
// // prob3 sum("malak" ,"sobhy") the res will be malaksobhy but this isnt the core of func
// // sum(20, 20);
// // function sum(a, b) {
// //   console.log(a + b);
// // }

// // 2- func declaration
// // 2.1 anonymius func (cannot be hoisting)

// // const sum = function (a, b) {
// //   console.log(a + b);
// // };
// // sum(
// //   10,
// //   10
// // )(
// //2.2 self innvoking func
// // cannot be updated , just call once , and it call herself

// //   function (a, b) {
// //     console.log(a + b);
// //   }
// // )(5, 8);

// // 3 - arrow func
// //  no hoisting , it cant access a,b by this , it only access the outer scope
// // argument
// // const sum = (a, b) => {
// //   console.log(a + b);
// // };

// // ***rest parameter (it doesnt know the number of parameter will pass) (it take what will pass and put them in array)
// function mult(...arg) {
//   for (let i = 0; i < arg.length; i++) {
//     console.log(arg[i] * 5);
//   }
// }
// mult(10, 20, 30, 40);

// const mul = (...arg) => {
//   for (let i = 0; i < arg.length; i++) {
//     console.log(arg[i] * 5);
//   }
// };

// // ***spreed operator
// var arr = [1, 2, 3, 4, 5, 6];
// var ar = [7, 8, 9, 10];

// console.log(arr.concat(ar));
// // spreed (deep copy)
// console.log([...arr, ...ar]);
// deep_copy_arr_ar = [...arr, ...ar];

// // any update in arr1 reflect in arr and the vice vise
// arr1 = arr;

// // use rest and spreed operator together

// function sumArr() {
//   var res = 0;
//   // rest
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }
// // spreed
// var res = sumArr(...arr);

// // destructuring
// let [a, b, c, d, e, f] = arr;
// console.log(a, b, c, d, e, f);

// array methods
var q = [10, 40, 60, 0, 5, 3];

// add from back
q.push(7);
// add from front
q.unshift(0);
// remove 7 last element
q.pop();
// remove from front
q.shift();

// array item from 1 to 3
var qq = q.slice(1, 4);

// delete items form start point including the start point
// so splice reflect in array but slice not
var splice_arr = q.splice(1, 3);
// from  index 1 dont delete(0) but add (7,8)
q.splice(1, 0, 7, 8);

// is it contain 8? t or f
console.log(q.includes(8));

console.log(q.concat(7, 8, 9));

// return the val at index 2
console.log(q.at(2));

// tell me 5 in which index
console.log(q.indexOf(5));

console.log(q.sort((a, b) => b - a));

// a is accumulator and 0 is the initial val for a
const avg = students.reduce((a, e) => a + e.grades, 0) / students.length;
console.log(avg);

// module , promise