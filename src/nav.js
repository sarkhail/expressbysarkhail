const express = require("express");
const app = express();
port = 8000;

app.get("/", (req,res)=>{
    res.send("Welcome to my Homepage");
});
app.get("/about", (req,res)=>{
    res.send("Welcome to my About us Page");
});
app.get("/contact", (req,res)=>{
    res.send("Welcome to my Contact Us Page");
});
app.get("/temp", (req,res)=>{
    res.json ([{
        id: 1,  
        name: "sarkhail",
    },
    {
        id: 1,  
        name: "sarkhail",
    },
    {
        id: 1,  
        name: "sarkhail",
    }
]);
});

app.listen(port, ()=>{
    console.log("Server is listening of Port:", port);

});