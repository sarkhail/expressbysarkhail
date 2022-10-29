const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require("hbs");

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const staticPath = path.join(__dirname, "../public");

hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");
app.set("views", templatePath);

//app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.render("index");
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