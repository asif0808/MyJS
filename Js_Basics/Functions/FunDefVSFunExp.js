// function definition(here we can call function even before function definition)
greet()
function greet() {
    console.log("Hello Using definition");
}
//function expression can be called only after function definition
//greet2()--ReferenceError: Cannot access 'greet2' before initialization 
const greet2=function () {
    console.log("Hello Using Func Expression");
}
greet2()
