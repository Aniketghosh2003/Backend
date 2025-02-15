const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/dataapp");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number,
  post: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'post'
    }
  ]
});

const User = mongoose.model("User", userSchema);
module.exports = User; 
