const express= require("express");
const { dirname } = require("path");
const bodyParser = require("body-parser");
const app = express();
 app.use(bodyParser.urlencoded({Extended:true}))
app.get("/",function(req, res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req, res){
    var num1= Number(req.body.num1)
    var num2=Number( req.body.num2 )
   var result= num1+num2;

    res.send("The result is"+ result);

});
app.get("/bmicalc", function(req, res) {
    res.sendFile(__dirname + "/BMI.html");
  });
  
  app.post("/bmicalc", function(req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
  
    // Convert height to meters
    height = height / 100;
  
    // Calculate BMI
    var bmi = weight / (height * height);
  
    // Return BMI rounded to two decimal places
    bmi = bmi.toFixed(2);
  
    res.send("Your BMI is: " + bmi);
  });
  
app.listen(3000,function(){
    console.log('Server is running on port 3000');
})