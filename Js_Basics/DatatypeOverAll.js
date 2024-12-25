// primitive and non-primitve
// primitive datatypes
const score=34
let name="herry"
let IsExist=true
let Promote=null //object type
let BigNumber=222223445n
let address;
console.log(typeof(score));
console.log(typeof(name));
console.log(typeof(IsExist));
console.log(typeof(BigNumber));
console.log(typeof(address));
console.log(typeof(Promote));
// non primitive
// array,objects,functions
let arr=[3,4,"hi",true]
console.log(arr,typeof(arr));
let obj={name:"John",
    score:45,
IsPass:false
}
console.log(obj,typeof(obj))
let Myfun=function()
{
    console.log("hello this is func")
}
Myfun() //calling the function 
console.log(typeof(Myfun));
