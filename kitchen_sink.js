// Kitchen Sink
//
// Write a function that takes a variable and using the typeof opertor console logs different messages. If it is a:
// string: it should just console log it
// number: it should square it and console log the result
// boolean: it should console log either 'yes' or 'no'
// function: it should invoke the function()
// undefined: it should scold the user of the function for passing in bad data

// Bonus
//
// If it is an array or object, javascript will return it's
// type as object, you can use the isArray Method to check if it
 // is an array and complete the following extensions:
// array: loop through each element and console log it
// object: loop through each key and console log the value there
// null: is also technically an object so you can work out how to check for that

// Super Bonus
//
// In the above where you are given an array/object, rather than console log the result,
// call the kitchenSink function again with each element in the array passed in as an arguement - this is called Recursion btw, it's considered pretty advanced stuff :-)

var any = undefined
function type(){
if (typeof any === "string") {
  console.log(any);
}
else if (typeof any === "number") {
  console.log(Math.pow(any,2));
}
else if (typeof any === "boolean") {
console.log('yes');
}
else if (typeof any === "function") {
  any()
}
else if (typeof any === "undefined") {
  console.log("Wrong data input!");
}}

type()

function arrOb (){
var any1 = [0,1,2,3]

if (Array.isArray(any1)) {
  for (var i = 0; i < any1.length; i++) {
  console.log(any1[i])
  }
}
else if (typeof any1 ==='object'){
  for (var prop in any1){
    console.log("any1." + prop + "=" + any1[prop]);
  }
}
else {
  console.log(null);
}
}

arrOb()
