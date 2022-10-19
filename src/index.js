const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const viewspath = path.join(__dirname, "../views");

app.set("view engine", "hbs");

app.set("views", viewspath);

//app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.render("index", {channelName: "Sarkhail"});
});
app.get("/", (req,res)=>{
    res.send("Hellow world from sarkhail");
});

app.get("/contact", (req,res)=>{
    res.send("Hellow world from sarkhail");
});
app.get("/", (req,res)=>{
    res.send("Hellow world from sarkhail");
});

app.listen(port, ()=>{
    console.log("Server is listening of Port:", port);

});