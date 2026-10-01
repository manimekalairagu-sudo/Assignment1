const { log } = require("node:console");
const { reverse } = require("node:dns");

let input = "veehamayili";
let output = "";

for(let i=input.length-1;i>=0;i--){
    output+=input[i];
   }
    console.log("Reverse string:",output);
