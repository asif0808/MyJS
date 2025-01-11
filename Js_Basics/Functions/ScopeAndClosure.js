//let a=4;
// function First() {
//     return a
// }
// console.log(First());
function Two(a) {
    return a;
}
//console.log(Two(5))
function Three(a) {
     a=99;
     return a;
}
//console.log(Three(55));
//console.log(a);
//Nested Function
function Outer(a,b) {
    function inner(c) { //inner function can easily access varibles of outer functions
        return a+b+c;       
    }
   console.log(inner(5));
}
Outer(2,3);
//Another nested function example
function A(a) {
    function B(b) {
        function C(c) {
            //return a,b,c; can not return multiple vals using return statement
            //alternate way
            const res=[a,b,c]
            return res
        
        }
        const res= C(6);
        console.log(res);
    }
    B(4)
}
A(2);
//console.log(res); cant access coz it is defined inside

