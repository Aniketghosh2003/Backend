const express = require("express");
const path = require("path");
const userModel = require("./models/user");
const { send } = require("process");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/read", async (req, res) => {
  const users = await userModel.find();
  res.render("read", { users });
});

app.get("/delete/:id", async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.redirect("/read");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting user");
    }
});


app.get("/edit/:id", async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.render("edit", { user });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching user");
    }
});

app.post("/edit/:id", async (req, res) => {
    try {
        const { name, email, imageurl } = req.body;
        await userModel.findByIdAndUpdate(req.params.id, {
            name,
            email,
            imageurl
        });
        res.redirect("/read");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating user");
    }
});


app.post("/create", async (req, res) => {
  let { name, email, imageurl } = req.body;
  let createuser = await userModel.create({
    name,
    email,
    imageurl,
  });
 res.redirect("/read");
});

app.listen(3000, () => {
  console.log("Server is starting on http://localhost:3000");
});
