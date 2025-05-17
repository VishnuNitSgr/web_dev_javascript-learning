// let fruits=["apple","banana","mango"];
// console.log([...fruits, "guava"]);

const sum=(...numbers)=>{
    return numbers.reduce((accum,currele)=>(accum=accum+currele),0);
     
    };



console.log(sum(1,2,3,4));