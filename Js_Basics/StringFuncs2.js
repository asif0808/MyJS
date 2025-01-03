const name=new String(" My_name_is_aasif ");
console.log(name);
console.log(name.length);
console.log(name.charAt(3));
indx=4;
console.log(`character at ${indx} is ${name.charAt(indx)}`);
console.log("hello".charAt(4));
// concat()
const greet="Good Morning";
console.log(greet.concat(name));
console.log(greet.concat(',',name));
console.log(greet.concat(name,"how u doing?"));
// performing concat on a list
const greetList=["hello","good morning"," ","how r u"]
console.log("".concat(...greetList));
// concat on different primitive types
console.log("".concat(5,6,"hi"));
// startsWith() and endsWith()
console.log("Hello There".startsWith("Hell"));
console.log("Hello There".startsWith("hell"));
// using position
console.log("Hello There".startsWith("There",6));
// endsWith()
console.log("Hello World".endsWith("World"));
console.log("Hello World".endsWith("world"));
// providing position
console.log("Hello World".endsWith("llo",5));
// includes()
console.log("Hello World".includes("orld"));
console.log("Blue Whale".includes("whale"));
console.log("Blue Whale".toLowerCase().includes("whale"));
// indexOf()
const para="I think Ruth's dog is cuter than your dog!";
const SearchItm="dog"
firstoccur=para.indexOf(SearchItm)
console.log(`index of first ${SearchItm} is ${firstoccur}`);
console.log(`index of second ${SearchItm} is ${para.indexOf(SearchItm,firstoccur+1)}`);
console.log(`last index of ${SearchItm} is ${para.lastIndexOf("dog")}`);
// padEnd() and padStart()
// padlength also includes string length
console.log("Hello there".padEnd(2,'.'));
console.log("Hello there".padEnd(20,'.'));
console.log("Hello there".padStart(20,'.'));
console.log('44'.padEnd(10));
console.log("Hi there".padEnd(20,'.').padStart(40,'.'));
// repeat()
console.log("Hello ".repeat(5));
const mood="Happy! "
console.log(`I feel ${mood.repeat(5)}`);
// replace and replaceAll
// replace()
console.log(para.replace("dog","monkey"));
console.log(para.replaceAll("dog","monkey"));









