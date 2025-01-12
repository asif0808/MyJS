// immediately invoked function
const myfun=(function () {
    console.log("hello myfun");
})();
// Ex2
(function myfun2(a) {
    console.log("myfun2",a);
})(22);
// using arrow function in iif
const addtwo=console.log(((a,b)=>(a+b))(5,5));
((a,b)=>{console.log(a-b);})(10,5);