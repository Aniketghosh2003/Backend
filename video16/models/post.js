const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  postData: String,
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  date: {
    type: Date,
    default: Date.now,
  },
});



const Post = mongoose.model("Post", postSchema);
module.exports = Post;
