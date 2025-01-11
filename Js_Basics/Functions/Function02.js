// Passing Parameters
// 1.positional parameters
const AddNum=function (a,b) {
    console.log(a);
    console.log(b);
    return a+b; 
}; 
console.log(AddNum()); //NaN (a,b undefined)
console.log(AddNum(3));//NaN (b undefined)
console.log(AddNum(3,4)); //7 (3,4)
//2.to prevent unexpected results(i.e. NaN) default parameter concept is used
function AddUsingDefault(a,b=1) {
    console.log(a); 
    console.log(b);//a=1 if not defined at function call
    return a+b;
}
console.log(AddUsingDefault()); // NaN (undefined,1)
console.log(AddUsingDefault(5));//6(5,1)
console.log(AddUsingDefault(5,6)); //11 (5,6) b val will be updated to 6

