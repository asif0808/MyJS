const myobj={name:"Aasif",
    Branch:"CSE",
    Mob:"9999"
}
let Myobj2=new Object();
Myobj2={name:"ASF",
    Dept:"DS",
    Mob:"9191"
};
console.log(myobj);
console.log(Myobj2);
// merging objects
const myobj3={myobj,Myobj2}
console.log(myobj3); //nested object
// using assign(target,src1,src2,src3....)
// values of same keys will be overwritten
console.log(Object.assign({},myobj,Myobj2));
const obj={a:1,b:2};
const obj2={c:3,d:4}
console.log(Object.assign({},obj,obj2));
console.log(obj);
// to merge ini existing object
// Object.assign(obj,obj2)
// console.log(obj);
// Using spread operator for merging
const Finalobj={...myobj,...Myobj2}
console.log(Finalobj);
