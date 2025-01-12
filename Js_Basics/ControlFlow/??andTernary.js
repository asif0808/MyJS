// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// nullish coalescing operator(??)
const val1=5??12;
console.log(val1);
const val2=12??32;
console.log(val2);
const val3=null??12;
console.log(val3);
const val4=undefined??12;
console.log(val4);
const val5=5??undefined;
console.log(val5);
const val6=5??null;
console.log(val5);
const val7=null??undefined;
console.log(val7);
const val8=undefined??null;
console.log(val8);
const val9=null??2??33??99
console.log(val9);

//ternary operator (condition?true:false)
const a=9;
a%2==0?console.log("a is even"):console.log("a is odd");
;


 
