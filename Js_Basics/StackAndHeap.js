// stack (primitive types)
let myName="John"
let AnotherName=myName
console.log("Before Change " ,myName);
console.log("Before Change ",AnotherName);
AnotherName="Ronny"
console.log("After Change ",myName);
console.log("After Change ",AnotherName);
//In above example changes made is not affecing the original value
// Heap (non-primitive)
let obj={
    name:"blizz",
    email:"user@.com"
}
let newObj=obj
console.log("before any change ",obj);
console.log("before any change ",newObj);
newObj.email="blizz@.com"
console.log("after change ",obj);
console.log("after change ",newObj);
