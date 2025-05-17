// function processUserInput(name,callback){
//     console.log("Received input: "+name);
//     callback(name);
// }

// function greetUser(name){
//     console.log(`hello ${name}`);
// }
// processUserInput("vishnu",greetUser);

// processUserInput is a higher order function
// greetUser is a callback function

//write a program to perform a mathematical operations using callback function and two variables in javascript
// function performOperation(num1,num2,callback){
//     let result =callback(num1,num2);
//     return result;
// }

// console.log(performOperation(10,20,(n1,n2)=>n1+n2));
// console.log(performOperation(10,20,(n1,n2)=>Math.abs(n1-n2)));
// console.log(performOperation(10,20,(n1,n2)=>n1*n2));
// console.log(performOperation(10,20,(n1,n2)=>n1/n2));