const express = require ("express");
const app = express() ;
const ejs = require("ejs");
//const { urlencoded } = require("express");

app.set('view engine', 'ejs');

var newitems= [];

app.get("/", function(req,res){
//res.send("hello!") ;

var today= new Date();

var options = {
    weekday: 'long', 
    year: 'numeric',
     month: 'long',
      day: 'numeric'
}
var kindofday = today.toLocaleDateString(undefined,options);

res.render("lists", {day:kindofday , items:newitems })                                    // figure out render!!



})

//app.use(express.urlencoded({extended:true}));
//app.use(express.json);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/", function(req,res){

//console.log(req.body);
//res.send("hello there!!We'er Successfull!!Told yaa");

 newitem = req.body.newtask ;
 newitems.push(newitem);

//console.log(newitem);
res.redirect("/");                                         // Visit get command again since home page is reloaded!


})

app.listen(3000 , function(){
    console.log("Server is up and running on port 3000");
})