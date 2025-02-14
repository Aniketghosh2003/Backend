// const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");  


// app.use(cookieParser());

app.get("/",(req,res)=>{
    // res.cookie("name","Aniket");
    // res.send('hello');
    // bcrypt.genSalt(10, function (err, salt) {
    //   bcrypt.hash("korol", salt, function (err, hash) {
    //     console.log(hash);
    //   });
    // });
    res.send("working");

    // bcrypt.compare(
    //   "korol",
    //   "$2b$10$Dg2mEXEvw/Z84Ll08NlcU.yMrFuwyPo5qUkbkDkaCGeKRMOvNkVU2",
    //   function (err, result) {
    //     console.log(result);
    //   }
    // );
    // const token = jwt.sign({email:"ankit@gmail.com"},"secret");
    // console.log(token);
})

// app.get("/read", (req, res) => {
// //   console.log(req.cookies);
//   res.send("read");
// });

app.listen(3000,function (params) {
    console.log("Server is on http://localhost:3000");
})
