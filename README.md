## Run the project

```bash
npm install
npm start
```

The server runs at `http://localhost:8080`.

## Postman Tests

Get all products:

```bash
curl http://localhost:8080/products
```

Add a product:

```bash
curl -X POST http://localhost:8080/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Keyboard","price":49}'
```
