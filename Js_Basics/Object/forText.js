const MyObj={name:"Aasif",Dept:"CSE",Roll:123,Email:"aasif@gg.com"};
console.log(MyObj);
//Object.preventExtensions()-->cant add new property
Object.preventExtensions(MyObj);
MyObj.addr="IND";
console.log(MyObj); //not added
MyObj.Dept="DataSc";
console.log(MyObj);
delete MyObj.Dept;
console.log(MyObj);
//Object.seal()
Object.seal(MyObj); //only modfication allowed
MyObj.Dept="CSE";
delete MyObj.name;
console.log(MyObj); //no effect
//modfying existing property
MyObj.name="John";
console.log(MyObj);
//freeze()---nothing allowed
Object.freeze(MyObj);
MyObj.Email="gg@ff.com";
MyObj.addr="IND";
delete MyObj.name;
console.log(MyObj);
console.log(Object.isFrozen(MyObj));
console.log(Object.isExtensible(MyObj));
console.log(Object.isSealed(MyObj));







