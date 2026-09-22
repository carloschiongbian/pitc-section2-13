const express = require('express');

const app = express();
const port = 8080;

app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Headphones', price: 99 },
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = {
    ...req.body,
    id: products.length + 1,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
