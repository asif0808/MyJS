// program for even number
const num=0;
// if(num%2==0)
// {
//     console.log(`number ${num} is even`);
// }
// console.log("program ended");
// if else
// if(num%2!=0)
// {
//     console.log(`number ${num} is odd`);
// }
// else{
//     console.log(`number ${num} is even`);
// }
// nested if else
if(num!=0)
{
    if(num%2==0)
    {
        console.log(`number ${num} is even`);
    }
    else
    {
        console.log(`number ${num}is odd`);
    }

}
else{
    console.log("no zero value accepted try again");
}
// multiple conditions using logical and(&&) and or(||)
const num2=4;
if(num2!=0 && num2%2==0){
console.log(`number ${num2} is even`);
}
else{
    console.log("zero or odd");
    
}
