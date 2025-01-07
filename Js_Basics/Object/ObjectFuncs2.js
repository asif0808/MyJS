const Myobj={name:"Aasif",Dept:"CSE",Email:"aasif@gg.com"};
console.log(Myobj);
//Object.freeze()
Object.freeze(Myobj);
Myobj.Dept="DS";
Myobj["name"]="john";
console.log(Myobj);
//returns key names
console.log(Object.getOwnPropertyNames(Myobj));
// creating a prototype for existing object
const MyobjPro=Object.create(Myobj);
//getPrototypeOf()
console.log(Object.getPrototypeOf(MyobjPro));
console.log(Object.getPrototypeOf(MyobjPro)==Myobj);
// Object.hasOwn()
console.log(Object.hasOwn(Myobj,'Dept'));
console.log(Object.hasOwn(Myobj,'email'));


