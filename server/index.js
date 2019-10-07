const keys = require("./keys");

const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const { Pool } = require("pg");

const pgClient = new Pool({
  user: keys.pgHost,
  host: keys.pgHost,
  database: keys.pgUDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("error", () => console.log("Lost PG connection"));

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch(err => console.log(err));
