const score=200;
const marks=new Number(45);
console.log(score,typeof score);
console.log(marks,typeof marks);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
// methods
// toExponential()
console.log(marks.toExponential());
console.log(score.toExponential());
console.log(score.toExponential(5));
// toFixed()
console.log(score.toFixed(2));
const val=34.56356
console.log(val.toFixed(3));
// toLocaleString()
const rate=2300000
console.log(rate.toLocaleString("en-IN"));
// toPrecision()
lim=val.toPrecision(3);
console.log((lim,typeof lim));
// toString()
const code=342;
const Scode=code.toString()
console.log(code,typeof code);
console.log(Scode,typeof Scode);
// valueOf()
const pmarks=marks.valueOf()
console.log(marks,typeof marks);
console.log(pmarks,typeof pmarks);
// additional point
// using string functions for Number
const level=244;
console.log(level.toString().length);
