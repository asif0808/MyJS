// slice(startInd),slice(startInd,endInd-1)
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(10));
console.log(str.slice(10,19));
// using negative indexing
console.log(str.slice(-9,-5));
console.log(str.slice(-10));
// split()
strList=str.split(' ')
console.log(strList,typeof strList);
// substring()-> treats every negative index as 0
const text="Mozilla"
console.log(text.substring(2));
console.log(text.substring(-2));
console.log(text.substring(0,3));
console.log(text.slice(0,3));
//  toUpperCase() and toLowerCase()
const sentence="ONce Upon a time , there was a king"
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
// trim(),trimStart()/trimLeft(),trimEnd()/ trimRight()
const txt="   Hello World   "
console.log(txt,txt.length);
console.log(txt.trim(),txt.trim().length);
console.log(txt.trimStart(),txt.trimStart().length);
console.log(txt.trimEnd(),txt.trimEnd().length);
console.log("   Hello World".trimLeft());
// valueOf()
const greeting=new String("Hello EveryOne");
console.log(greeting, typeof greeting);
newG=greeting.valueOf();
console.log(newG,typeof newG);







