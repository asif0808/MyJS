// simple for to print 1-10 numbers
for (let i = 1; i <= 10; i++) {
    //console.log(`number => ${i}`);
}
// for to iterate an array
const arr=[23,"hello",44,true,NaN,null]
//console.log("array elements are: ");
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element);
    
    
}
//console.log(typeof NaN); => number
// console.log(typeof null); => object
// console.log(typeof undefined); => undefined
// using for on object =>no , use for in and for of instead
// for with break
for (let i = 1; i < 11; i++) {
    if(i==6)
    {
        break;
    }
    //console.log(i);
}
//continue with for loop
//printing even numbers between 1-50
for (let i = 1; i <= 50; i++) {
    if(i%2!=0)
        {
         continue
        }
       console.log(i);
}
// printing in one line
let res=''
for (let i = 1; i <=10; i++) {
    res=res+' '+i  
}
console.log(res);
// iterating over an object 
const obj={name:'Aasif',Dept:"CSE",Rollno:34}
keys=Object.keys(obj)
vals=Object.values(obj)
for (let i = 0;i< keys.length; i++)
    {   
        console.log(`${keys[i]}=> ${vals[i]}`);
         
    }
