const studentInfo = require('./information'); 
var cowsay = require("cowsay");

console.log(cowsay.say({
    text :  `Hi, my name is ${studentInfo.name} and I work at ${studentInfo.campus}`,
    e : "oO",
    T : "U "
   
}));
