const express = require("express");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const app = express();
app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    const uniqueSuffix = crypto.randomBytes(8).toString("hex");
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.send("hello");
});


app.get("/test", (req, res) => {
  res.render("test");
});


app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.send(`Image uploaded: ${req.file.filename}`);
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
