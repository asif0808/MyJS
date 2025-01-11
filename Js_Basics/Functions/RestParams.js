function AllSum(a,b=2,...Rest)
{
    console.log(a, typeof a);
    console.log(b, typeof b);
    console.log(Rest, typeof Rest);
    sum=0;
    for(let i=0;i<Rest.length;i++)
    {
        sum+=Rest[i];
    }
    return a+b+sum;
}
console.log(AllSum(4));
console.log(AllSum(4,5));
console.log(AllSum(4,5,6,4));