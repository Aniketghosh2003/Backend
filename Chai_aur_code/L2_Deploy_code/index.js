const express = require('express');
const app = express();

require('dotenv').config();

app.get('/',(req,res) => {
    res.send("hello world");
})

app.listen(process.env.PORT , () =>{
    console.log(`It is running on http://localhost:${process.env.PORT}`);
})