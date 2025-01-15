let i=1
while (i<=10) {
  //  console.log(i);
    i++;
};
//console.log(i);
i=1;
// while with break and continue 
while(i<=10)
{
    if(i==5)
    {
        break;
    }
   // console.log(i);
    i++
}
// with continue
// print odd number from 1-50
i=1
while (i<=50) {
    // if(i%2==0)
    // {
            i++;
    //     continue
    // }
    console.log(i);
    i++;
}
// DoWhile
i=1
do {
    console.log(i);
    i++
} while (i<=10);
// using while to iterate over an array
const arr=["hello",4,55,null,true]
i=0
while (i<arr.length) {
    console.log(arr[i]);
    i++
}