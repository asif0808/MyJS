// Number to Boolean
let A=23
let B=-23
let C=0
let boolA=Boolean(A) 
let boolB=Boolean(B)
let boolC=Boolean(C)
console.log(A,typeof(A),"converts to",boolA,typeof(boolA))
console.log(B,typeof(B),"converts to",boolB,typeof(boolB))
console.log(C,typeof(C),"converts to",boolC,typeof(boolC))
// String to Boolean
let S=""  //empty string
let P=" "  //string containing white spaces
let R="hello" //pure string
let boolS=Boolean(S)
let boolP=Boolean(P)
let boolR=Boolean(R)
console.log(S,typeof(S),"converts to",boolS,typeof(boolS))
console.log(P,typeof(P),"converts to",boolP,typeof(boolP))
console.log(R,typeof(R),"converts to",boolR,typeof(boolR))
// null to Boolean (false)
let N=null
let boolN=Boolean(N)
console.log(N,typeof(N),"converts to",boolN,typeof(boolN))
// undefined to Boolean (false)
let val;
let boolval=Boolean(val)
console.log(val,typeof(val),"converts to",boolval,typeof(boolval))