const express = require("express");
const mysql = require("mysql");
const app = express();
const expressPort = 4000;

app.use(express.json());

const dataBase = mysql.createConnection({
  host: "mysql",
  port: 3306,
  user: "root",
  database: "myshop",
});

