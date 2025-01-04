// creating a date object
let myDate=new Date() //provides current date and time
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
// defining own date and time
let urdate= new Date(2025,0,4)
console.log(urdate.toLocaleString());
let urdate2=new Date(2025,0,4,11,35)
console.log(urdate2.toLocaleString());
let AnotherDt=new Date("07-15-2001")
console.log(AnotherDt.toString());


