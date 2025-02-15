const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const postModel = require("./models/post");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  try {
    let user = await userModel.create({
      username: "", //give your own credencial
      email: "", //give your own credencial
      age: 30,
    });

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get("/create/post", async (req, res) => {
  let post = await postModel.create({
    postData: "Hello",
    user: "", //give your own credencial
  });

  let user = await userModel.findOne({ _id: "" }); //give your own credencial
  user.post.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
