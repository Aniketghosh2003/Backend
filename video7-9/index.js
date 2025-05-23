const express  = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine","ejs");//It is commonly used to configure application-wide settings such as the view engine
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/',function (req,res) {
    fs.readdir(`./files`,function(err,files){
        res.render("index",{files:files});
    })
});

app.get("/files/:filename", function (req, res) {
      fs.readFile(`./files/${req.params.filename}`,"utf8",function(err,filedata){
        if (err) {
          console.error(err);
          return res.status(500).send("Error reading file");
        }
        res.render('show',{filename:req.params.filename,filedata:filedata});
      })
});

app.post("/create", function (req, res) {
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err) {
    if (err) {
      console.error(err);
      return res.status(500).send("Error creating file");
    }
    res.redirect('/');
   })
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});