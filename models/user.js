const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String, required: true, minlength: 3 }
  }
);

module.exports = mongoose.model("User", UserSchema);
