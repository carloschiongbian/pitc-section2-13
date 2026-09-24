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
  const { name, price } = req.body || {};

  if (
    typeof name !== 'string' ||
    name.trim() === '' ||
    typeof price !== 'number' ||
    !Number.isFinite(price) ||
    price < 0
  ) {
    return res.status(400).json({
      error: 'Name must be a non-empty string and price must be a non-negative number',
    });
  }

  const newProduct = {
    id: products.length + 1,
    name: name.trim(),
    price,
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  console.error(err);
  return res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
