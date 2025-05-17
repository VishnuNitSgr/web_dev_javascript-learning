// let items=["apple","mango","banana"];
// for(let i=0;i<items.length;i++){
//     console.log(items[i]);
// }

// for(let item of items){
//    console.log(item);
// }
// for(let item in items){
//     console.log(item);
// }

//array.foreach (function,(callback,index,array)){
//your logic here}
//}, this value;

// items.forEach((currEle,index,arr)=>{
//     // console.log(`${currEle} ${index}`);
//     // console.log(arr);
// });

// items.map((currEle,index,arr)=>{
// console.log(arr);
// // console.log(`${currEle} ${index}`);
// });

// const myMapArray=items.map((currEle,index,arr ) => {
// return `${currEle} ${index}`;
// });
// console.log(myMapArray);

//write a program to multiply each element with 2
// const numbers=[1,2,3,4,5];
// const mapmy=numbers.map((currEle,index,arr)=>{
//     return currEle*2;
// });
// console.log(mapmy);

// const numbers=[1,2,3,4,5,6,7];
// const mapmy=numbers.forEach((currEle,index,arr)=>{
//   console.log(currEle*2);
// });
// console.log(mapmy);

// const arr=[1,2,3,4,5];
// // arr.push(7);    
// // console.log(arr);
// arr.unshift(8);
// console.log(arr);
// arr.shift();
// console.log(arr);

// const months=["jan","feb","march"];
// months.splice(months.length,0,"dec");
// console.log(months);
// console.log(months.splice());
// console.log(months.indexOf("march"));

// let fruits=["apple","mango","banana"];
// fruits.forEach((currEle,index,arr)=>{
// console.log (`${currEle} ${index}`);
// });
   
// // write a program that receives an array of numbers as input and print a array of numbers that are below 50 and divisible by 5 also return this array
//   // give a array from user input
//   function filterNumbersFromUserInput() {
//     let input = prompt("Enter numbers separated by commas (e.g. 10,55,25,40,60,5,51,50,49,45):");
//     let arr = input.split(',').map(Number);
//     const result = arr.filter(num => num < 50 && num % 5 === 0);
//     console.log("Filtered array:", result);
//     return result;
// }

// filterNumbersFromUserInput();



// const inputArray = [10, 55, 25, 40, 60, 5, 51, 50, 49, 45];
// filterNumbers(inputArray);

//   let str="VIshnu";
//   for(let s of str){
//     if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'|| s=='A' || s=='E' || s=='I' || s=='O' || s=='U'){
//         console.log(s);
//     }
//   }
   
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter something: ', function(answer) {
//     console.log('You entered:', answer);
//     rl.close();
// });
// for(let s of str){
//     if(s=='a' || s=='e' || s=='i' || s=='o' || s=='u'|| s=='A' || s=='E' || s=='I' || s=='O' || s=='U'){
//         console.log(s);
//     }
//   }
   
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter a string: ', function(input) {
//     const vowels = 'aeiou';
//     rl.close();
//     for(let c of input){
//         if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u'|| c=='A' || c=='E' || c=='I' || c=='O' || c=='U'){
//             console.log(c);
//         }
//     }
   
// });

// let arr=[1,2,3,4,5];

// let middleEle=0;
// if(arr.length%2==0){
//     // ye even ka case hai
//    middleEleIndex=arr.length/2;
//    console.log(arr.slice(middleEleIndex,middleEleIndex+1));
// }
// else{
//     middleEleIndex=arr.length/2;
//    console.log(arr.slice(middleEleIndex));
// }

// let arr1=[2,3,4,5];
// let arr2=[5,6,7,8];

// arr3=arr1.concat(arr2);
// console.log(arr3);

// let arr1=[5,4,7,1,8,2];
// arr1.splice(3,1);
// console.log(arr1);
// arr1.splice(3,1,2);
// console.log(arr1);
// arr1.splice(3,2);
// console.log(arr1);
// arr1.splice(3,1,1);
// console.log(arr1);

// let numbers=[1,2,3,4,5,443,7,4,2,1];
// // numbers.sort((a,b)=>{
// //     if(a>b)return 1;
// //     else return -1;
// // });
// // console.log(numbers);
// numbers.sort();
// console.log(numbers);

// using map to square a element and create a new array

// let numbers=[1,2,3,4,5,443,7,4,2,1];
// let newArray=numbers.map((currEle,index,arr)=>{
//  return (currEle*currEle);
// });
// console.log(newArray);

// let str=["apple","mango","banana"];
// let newStr=str.map((currEle,index,arr)=>{
//   return currEle.toUpperCase();
// });
// console.log(newStr);
// let numbers=[1,2,3,4,5,443,7,4,2,1];
// let result=numbers.map((currEle,index,arr)=>{
//     if(currEle%2===0)
//         return currEle*currEle;
    
// }).filter((currEle)=> currEle!==undefined);
// console.log(result);

//ye add to cart ecom website me bahut use aata hai
// const numbers=[100,200,150,400,500];
// const total=numbers.reduce((accumm,currEle)=>{
//     return accumm+ currEle;
// },0);
// console.log(total);


// // console.log(`this is vishnu "CSE engineer" hell guys kaise \^ ho`);
// let str="vishnu";
// let newArra=Array.from(str);
// console.log(newArra);

// let str="vishnu";
// let target="h";
// for(let c of str){
// if(str.search("h")===target)
 // console.log("found");
// else
    // console.log("not found");
// }

// let str1="vishnu narayan";
// console.log(str1.endsWith("narayan"));
// console.log(str1.replace(/VISHNU/i , "world"));

// let str="apple,banana,orange";
// let arr=str.split(",").reverse();
// let arr2=arr.join(",");
// console.log(arr2);
// for(let ch=97;ch<=122;ch++){
// console.log(String.fromCharCode(ch));

// }
// const pangramChecker=(str)=>{
//     str.split(",").sort().join(",").toLowerCase().replace(' ','');
//     // str.toLowerCase();

   
//     for(let ch=97;ch<=122;ch++){
//         if(String.fromCharCode(ch)===str){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
// }
// console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));