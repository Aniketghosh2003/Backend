const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/signin-signout");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email }).then((user) => {
    if (user) {
      if (user.password === password) {
        //console.log("User logged in:", user);
        res.json(user);
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    }
    else{
        res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

app.post("/register", (req, res) => {
  userModel
    .create(req.body)
    .then((user) => {
      console.log("User registered:", user); // Log the user data
      res.json(user);
    })
    .catch((err) => {
      console.error("Error registering user:", err); // Log errors
      res.json(err);
    });
});

app.listen(3001, () => {
  console.log("Server is running...");
});
