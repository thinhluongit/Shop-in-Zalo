const express = require("express");
const { Pool } = require("pg");
const app = express();

// PostgreSQL connection setup
const pool = new Pool({
  user: "yourusername",
  host: "localhost",
  database: "yourdb",
  password: "yourpassword",
  port: 5432,
});

// Sample endpoint to fetch products
app.get("/api/products", async (req, res) => {
  const result = await pool.query("SELECT * FROM products");
  res.json(result.rows);
});

app.listen(5432, () => {
  console.log("Server is running on port 5432");
});