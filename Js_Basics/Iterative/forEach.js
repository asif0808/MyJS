// forEach returns val,index and array on which for each is applied
const arr=[32,4,true,null,"hello"]
arr.forEach(element => {
    console.log(element);
});
// using two params
arr.forEach((element,index) => {
    console.log(`${index}=> ${element}`);
    
});
// using three params
arr.forEach((element,index,array) => {
    console.log(`${index}=> ${element},[${array}]`);    
});
// adding all numbers of an array
const newarr=[1,2,3,4,5,6,7,8,9,10]
let s=0;
sarr=newarr.forEach(element => s=s+element);
console.log(sarr); //forEach doesnt return anything
console.log("total sum= ",s);
