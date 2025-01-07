const Myobj={name:"Aasif",Deprt:"DataScience",Roll:32}
// Object.create()
const MyobjPro=Object.create(Myobj)
console.log(Myobj);
// console.log(MyobjPro.Deprt);
// console.log(MyobjPro);
// Object.keys(),Object.values(),Object.entries()
// console.log(Object.keys(Myobj));
// console.log(Object.values(Myobj));
// console.log(Object.entries(Myobj));
// console.log(Object.keys(MyobjPro)); returns []
// adding new/removing existing /modifying existing property
// modfiying existing property
Myobj["name"]="John";
console.log(Myobj);
Myobj.Deprt="CSE"
console.log(Myobj);
// removing existing property
delete Myobj.Deprt;
delete Myobj["Roll"];
console.log(Myobj);
//adding new property
Myobj["Deprt"]="DataScience";
Myobj.Roll=32;
console.log(Myobj);
//Object.defineProperty()
Object.defineProperties(Myobj,{addr: {value:"IND",writable:true}});
console.log(Myobj.addr);
console.log(Myobj);
// Object.defineProperty()
Object.defineProperty(Myobj,"phno",{value:999,writable:true});
console.log(Myobj.phno);
console.log(Myobj);

