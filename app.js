const express = require("express");

const app = express();

const path = require("path");

app.listen(2020, ()=> console.log("server corriendo"));

const publicPath = path.resolve(__dirname, ("public"));

app.use(express.static(publicPath));

app.get("/", (req, res)=>{
    let file = path.join(__dirname, "views", "home.html");
    res.sendFile(file);
})

app.get("/register", (req, res)=>{
    let file = path.join(__dirname, "views", "register.html");
    res.sendFile(file);
})

app.get("/loging", (req, res)=>{
    let file = path.join(__dirname, "views", "loging.html");
    res.sendFile(file);
})
