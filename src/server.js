const express = require("express");
const corsConfig = require("./config/cors.config");
const bodyParser = require('body-parser');
require('dotenv').config();

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log("L'application s'est lancée sur le port " + PORT);
});

app.use(corsConfig);
app.use(express.json());
app.use(bodyParser.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

require("./db");
require("./routes")(app);
