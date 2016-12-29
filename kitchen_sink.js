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

function kitchenSink(dataType){
  switch(typeof dataType){
    case 'string':
      console.log(dataType);
      break;
    case 'number':
      console.log(dataType*dataType);
      break;
    case 'boolean':
      dataType ? console.log('yes') : console.log('no');
      break;
    case 'function':
      dataType();
      break;
    case 'undefined':
      console.log(`yo @$%@$%^ what's up with the horrbile input?`);
      break;
    case 'object':
      if (Array.isArray(dataType)) {
        dataType.map(function(value){
          kitchenSink(value);
        })
      } else if (dataType === null){
          console.log(`output is null`);
      } else {
        Object.keys(dataType).map(function(value2){
          kitchenSink(dataType[value2]);
        })
      }
  }
}

function helloWorld(){
  console.log('hello world!');
}

kitchenSink('hello');
kitchenSink(9);
kitchenSink(true);
kitchenSink(false);
kitchenSink(helloWorld);
kitchenSink(undefined);
kitchenSink([1,2,3,5,10]);
kitchenSink({john:'male',sarah:'female',princessLeia:'dead'});
kitchenSink(null);

function kitchenSinkReturn(dataType){
  switch(typeof dataType){
    case 'string':
      return dataType;
    case 'number':
      return dataType*dataType;
    case 'boolean':
      return dataType ? 'yes' : 'no';
    case 'function':
      return dataType();
    case 'undefined':
      return `yo @$%@$%^ what's up with the horrbile input?`
    case 'object':
      if (Array.isArray(dataType)) {
        dataType.map(function(value){
          return kitchenSink(value);
        })
      } else if (dataType === null){
          return `output is null`;
      } else {
        Object.keys(dataType).map(function(value2){
          return kitchenSink(dataType[value2]);
        })
      }
  }
}

function helloWorld2(){
  return 'hello world!';
}

console.log('<----------------------------------------------------------------------->')

console.log(kitchenSinkReturn('hello'));
console.log(kitchenSinkReturn(9));
console.log(kitchenSinkReturn(true));
console.log(kitchenSinkReturn(false));
console.log(kitchenSinkReturn(helloWorld2));
console.log(kitchenSinkReturn(undefined));
console.log(kitchenSinkReturn([1,2,3,5,10]));
console.log(kitchenSinkReturn({john:'male',sarah:'female',princessLeia:'dead'}));
console.log(kitchenSinkReturn(null));
