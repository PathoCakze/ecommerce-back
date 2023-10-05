const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Quizz:Xu3uIqq5bmbJzXhB@quizz.5um9scc.mongodb.net/Quentin"
);

const database = mongoose.connection;
database.once("open", () => {
  console.log("la db est connectée");
});

module.exports = database;
