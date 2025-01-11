function Myfun() {  //function definition
    console.log("Hello Function definition");
}
Myfun() //function call
//function expression
const Myfun2=function(){
    console.log("Hello Function expression");
}
Myfun2()
//returning a function
function Hello() {
    return "Returning...";
}
console.log(Hello());
// adding two numbers
function Sum(a,b) {
    return a+b;
}
const res = Sum(4,5)
console.log(res);
//importance of return statement
function Ex() {
    return "hello";
    console.log("Hello After return");//not execute after return satement
}
Ex()