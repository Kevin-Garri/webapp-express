const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

module.exports = connection;