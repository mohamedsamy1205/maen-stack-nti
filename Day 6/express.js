const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const fs = require("fs");
const productsPath = "products.json";
const usersPath = "users.json";

if (!fs.existsSync(productsPath)) {
  fs.writeFileSync(productsPath, JSON.stringify([]));
}

if (!fs.existsSync(usersPath)) {
  fs.writeFileSync(usersPath, JSON.stringify([]));
}

app.get('/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath));
  res.json(products);
});

app.get('/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(usersPath));
  res.json(users);
});

app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label>Name:</label>
      <input type="text" name="name" required />
      <br><br>
      <label>Price:</label>
      <input type="number" name="price" required />
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
    const { name, price } = req.body;
    
  res.send(`<h1>Received Data</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Price:</strong> ${price}</p>`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
