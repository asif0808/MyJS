// for...in (iterates through properties of an object)
const obj={name:"Aasif",Dept:"CSE",Email:"aasif@gg.com"}
for (const element in obj) {
    //obj.element => undefined, hence use obj[element]
    console.log(`${element} => ${obj[element]}`);    
}
// using for..in on array
const arr=[23,4,2,5]
for (const key in arr) {
 console.log(`${key}=> ${arr[key]}`);
 
}
// using for..in on Map
const mp=new Map()
mp.set("name","Aasif")
mp.set("Dept","CSE")
console.log(mp);
for (const key in mp) {
    console.log(key); //not working
    
}

