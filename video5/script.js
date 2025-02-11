const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/name", function (req, res) {
  res.send("Hi,my name is Aniket");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
