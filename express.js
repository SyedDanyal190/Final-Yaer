const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const port = 5000;

//HTTP Methods  GET(read), POST(create), PUT(update), DELETE

app.use(bodyParser.urlencoded({ extended:false }));

app.get("/",(req,res)=>{
    console.log(path.join(__dirname + "/login-form.html"));
    res.sendFile(path.join(__dirname + "/login-form.html"));
});


app.post("/api/v1/login",(req,res)=>{
   // res.send(`<h1>Done Mr. ${req.body.name}</h1> <h2>Your Email is ${req.body.email}</h2> <h3>Your password is ${req.body.password}</h3`)
   res.send("<h1>Done</h1>");
    console.log(req.body);
});
/*
//Api url post
app.post("/api/v1/login", (req,res)=>{
    res.send("<h1>Done</h1");
    console.log(req.body);
});


//simple url post
app.post("/",(req,res) =>{
    console.log("name");
});


app.get("/home",(req,res)=>{
    res.send("<h1>This is home page</h1>");
});
app.get("/about",(req,res)=>{
    res.send("<h1>This is About Page</h1>");
});
app.get("/contact",(req,res)=>{
    res.send("<h1>This is contact Page</h1>");
});
*/

app.listen(port,()=>{
    console.log(`server is working on:${port}`);
});


// REST (Representational State Transfer) is an Api that defines a set of functions that programmers can use to requests and receive responses using the Http Protocal methos such as GET and POST