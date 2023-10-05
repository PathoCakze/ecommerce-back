const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,

    unique: true,
  },
  name: {
    type: String,

   },
   firstName: {
    type: String,

   },

   password: {
    type: String,

   },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = User;