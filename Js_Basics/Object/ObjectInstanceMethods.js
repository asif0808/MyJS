const MyObj={name:"Aasif",Dept:"cse",addr:"IND"};
console.log(MyObj);
console.log(MyObj.hasOwnProperty('name'))
const MyObjPro=Object.create(MyObj);
console.log(MyObj.isPrototypeOf(MyObjPro));
console.log(Object.getPrototypeOf(MyObjPro));
//Object.is()
console.log(Object.is(2,2));
console.log(Object.is('2',2));
console.log(Object.is(NaN,NaN));
console.log(Object.is(0,null));
