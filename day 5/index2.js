
const fs = require("fs");

const file = "data.json";


if (!fs.existsSync(file)) {
  fs.writeFileSync(file, "[]");
}
// fs.writeFileSync(file, "[]");

function read() {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

// 3- كتابة
function write(data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// 4- إضافة Object
function add(obj) {
  const data = read();
  obj.id = Date.now(); 
  data.push(obj);
  write(data);
  console.log("Added:", obj);
}

// 5- تعديل Object
function update(id, newData) {
  const data = read();
  const index = data.findIndex(i => i.id === id);
  if (index === -1) return console.log("Not found");
  data[index] = { ...data[index], ...newData };
  write(data);
  console.log("Updated:", data[index]);
}

// 6- مسح Object
function remove(id) {
  let data = read();
  data = data.filter(i => i.id !== id);
  write(data);
  console.log("Removed id:", id);
}


// إضافة
add({ name: "Book", price: 50 });
add({ name: "Pen", price: 5 });

// قراءة
console.log("All:", read());

// تعديل أول عنصر
const all = read();
if (all.length > 0) {
  update(all[0].id, { price: 100 });
}

// مسح ثاني عنصر
if (all.length > 1) {
  remove(all[1].id);
}
// إضافة
add({ name: "Book", price: 50 });
add({ name: "Pen", price: 5 });
// إضافة
add({ name: "Book", price: 50 });
add({ name: "Pen", price: 5 });

// قراءة بعد التعديل والمسح
console.log("Final:", read());

