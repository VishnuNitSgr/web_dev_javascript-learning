// let idType="collegeID";
// let student={
//     [idType]:"1234sss",
//     name:"vishnu",
//     age:28,
//     isStudent:false,
//     greet: function(){
//         console.log("welcome bro");
//     },
// }
// console.log(JSON.stringify(student));
// JSON.parse(JSON.stringify(student));
// console.log(student);

// console.log(`my ${idType} is ${student[idType]}`);
// console.log(student);
// student.greet();
// console.log(student[`name`]);
// console.log(student.name);

// let obj={name:"vishnu",age:28};
// let obj1=obj;
//pass by reference
// // console.log(obj1);
// console.log("original",obj1);
// obj1.name="vishnu tripathi";
// console.log(obj1.name);
// console.log("original",obj);
//pass by value
// let obj={name:"vishnu",age:28};
// let obj1=Object.assign({},obj);
// console.log(obj1);
// obj1.name="vishnu tripathi";
// console.log(obj1.name);
// console.log("original",obj);
// console.log (student);
// console.log("original"+student);

// let student={
//     name:"bob",
//     age:12,
//     grades:{
//         math:90,
//         science:80,
//     }
// };
// const addSubjectGrade=(student,subject,marks)=>{
//   if(!student.grades){
//     student.grades={};
//   }
//    return  student.grades[subject]=marks;
// }
// addSubjectGrade(student,"computer",80);
// console.log(student.grades);

// let inputArray=[
//     {
//         id:1 ,name:"alice"
//     },
//     {
//         id:2, name:"hero"
//     },
//     {
//         id:3, name:"kira"
//     },
// ];
// // console.log(inputArray[1]);
// // console.log(inputArray[1].name);

// // console.log(inputArray);
// const arrayToObjects=(inputArray)=>{
//     let obj={};
// for(let key of inputArray){
  
//     obj[key.id]=key;
// }
// return obj;
// }
// console.log(arrayToObjects(inputArray));

// let name="vishnu";
// let height=6;
// let student={name,height};
// console.log(student);

// const name=["vishnu","mera", "naam"];
// const [first,seco,third]=name;
// console.log(seco); 

// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b);


