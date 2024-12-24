// Number()
// String to Number
let MyScore="44"
console.log("Before Conv" ,MyScore,typeof MyScore)
let RealScore=Number(MyScore)
console.log("After conv ",RealScore,typeof RealScore)
// pure string to Number
let str="24hello43"
let Nstr=Number(str)
console.log(str,typeof str,"converts to",Nstr,typeof Nstr)
// Boolean to Number
let a = true
let b = false
let boola=Number(a)
let boolb=Number(b)
console.log("true converts to ",boola,typeof boola)
console.log("false converts to ",boolb,typeof boolb)
// null to number
// null is of type object
let mark=null
let nmark=Number(mark)
console.log("null converts to ",nmark,typeof nmark)
// undefined to number
let promote; //undefined
let npromote=Number(promote)
console.log("undefined converts to ",npromote, typeof npromote) 
// NaN has some special meaning in js
console.log(typeof NaN)
console.log(typeof undefined)
console.log(typeof null)