const { log } = require("node:console");

let browserVersion = "chrome"

function getBrowser()
{
  //var is not block scope
    if(browserVersion == "chrome"){
        var browserVersion = "Edge"
        console.log("Inside Block1",browserVersion);
    }
    console.log("outside block1",browserVersion);
}
getBrowser();

function getBrowser2()
{
  //let block scope
  if(browserVersion == "chrome"){
    let browserVersion ="firefox"
    console.log("Inside Block2", browserVersion);
    }
    console.log("outside Block2", browserVersion);
    
}
getBrowser2();

function getBrowser3(){
  if(browserVersion == "chrome"){
    const browserVersion = "100.23.33"
    console.log("Inside Block3", browserVersion);
   }
   console.log("outside Block3", browserVersion);
   
}
getBrowser3();