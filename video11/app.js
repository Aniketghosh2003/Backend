const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@gmail.com'
  });
    res.send(createdUser);
});

app.get("/update", async (req, res) => {
    let updateuser = await userModel.findOneAndUpdate({ username: "johndoe" },{name:"John" },{new:true});
    res.send(updateuser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/readOne", async (req, res) => {
  let user = await userModel.findOne({ username: "johndoe" });
  res.send(user);
});


app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "johndoe" });
  res.send(users);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});