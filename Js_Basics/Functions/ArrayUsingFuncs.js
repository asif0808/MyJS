//passing array in functions
arr=["hello",34,null,true];
function Array(arr,a) {
    console.log(arr, typeof arr);
    console.log(arr[0]);
    arr[0]="World"
    console.log(arr);
    
    console.log(a);
}
Array(arr,5)
console.log(arr);
function SecondEle(arr) {
    return arr[1];
}
console.log(SecondEle(arr))
//passing an array as argument
function SumArrEle(a,b,c) {
    return a+b+c;
}
newArr=[5,5,5,5];
console.log(SumArrEle(...[4,56,5]))
console.log(SumArrEle(...newArr)); //takes only three values coz only three is defined at function definition
