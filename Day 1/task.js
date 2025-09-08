const students = [
  { id: 1, name: "Malak", grades: 70, passed: true },
  { id: 2, name: "menna", grades: 80, passed: true },
  { id: 3, name: "mariem", grades: 30, passed: false },
];
//1
const non_pass = students.filter((e) => {
  return e.passed == false;
});
console.log(non_pass);
//2
const upper = students.map((e) => {
  return e.name.toUpperCase();
});
console.log(upper);
//3
const pass = students.filter((e) => {
  return e.passed;
});
console.log(pass);
//4
const avg = students.reduce((a, e) => a + e.grades, 0) / students.length;
console.log(avg);
//5
const all_passed = students.every((e) => {
  return e.passed == true;
});
console.log(all_passed);
//6
const is_any_student_failed = students.some((e) => {
  return e.grades < 50;
});
console.log(is_any_student_failed);