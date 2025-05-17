//list of useful thing in ecmascript 2017
//string padding
// const name="vishnu";
// const paddedName=name.padStart(15,"*");
// console.log(paddedName);
// const paddedNameEnd=name.padEnd(10,"%");
// console.log(paddedNameEnd);

//trailing commas
// const greet=(name,age,)=>{
//   console.log(`me ${name} is ${age} years old`);
// }
// greet("vishnu",28
// const nestedArray=[1,2,[2,5]];
// console.log(nestedArray.flat());   
// console.log(nestedArray.flat(0));  

//flatmap()

// const arr=["My name","is Vishnu","narayan"];
// const newArr=arr.flatMap((currval)=>currval.split(" "));
// console.log(newArr);

//objectenterie
// const person={name:"vishnu",age:28,};
// const entry=Object.entries(person);
// console.log(entry);
// console.log(entry[0]);
// console.log(Object.fromEntries(entry));

//trim-trim start and trim end

// const str="   vishnu      ";
// console.log(str.trim());
// console.log(str.trimStart());
// console.log(str.trimEnd());

//symbol
// const mySymbol=Symbol("mySymbol");
// console.log(mySymbol);
// console.log(typeof mySymbol);