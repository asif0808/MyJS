// array.reduce(callbkfn)
const arr=[1,2,3,4,5,6,7,8,9,10]
initialval=0 //optional
const sumarr=arr.reduce((acc,currVal)=>(acc+currVal));
console.log(sumarr);
const initialval2=1;
const mularr=arr.reduce((acc,currVal)=>(acc*currVal),initialval2)
console.log(mularr);
// verifying multiplication result using for
let mul=1
for (let i = 0; i < arr.length; i++) {
    mul=mul*arr[i]
    
}
console.log(mul);
