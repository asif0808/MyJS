let TimeStamp=Date.now();
console.log(TimeStamp); //in miliseconds
console.log(Math.round(TimeStamp/1000));
let date=new Date(2025,0,4,10,48);
console.log(date);
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth()+1);
let bdate=new Date("07-15-2001")
console.log(bdate);
console.log(`ur birth month is ${(bdate.getMonth())+1}  and year is ${bdate.getFullYear()} and the day is ${bdate.getDay()} and month date is ${bdate.getDate()}`);


