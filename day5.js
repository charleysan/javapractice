console.log("Start");

setTimeout(function(){
  console.log("Timer");
}) 2000;

console.log("End");

//promises.js

const myPromis = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Timer");
  }, 2000);
});