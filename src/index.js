const { rejects } = require("assert");
const { promises } = require("dns");
const { resolve } = require("path");

//Callback and Promises
let p=new promises((resolve,rejects)=>{
    let a=1+1;
    if(a===2){
        resolve('Success');
    }else {
        rejects('Failed');
    }
})

p.then((message)=>{
    console.log(`This is then : ${message}`);
}).catch((errMsg)=>{
    console.log(`This is catch and returns the reject : ${errMsg}`);
})