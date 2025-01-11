data1={name:"Aasif",
    Dept:"CSE",
    RollNo:23
}
data2={name:"john",
    Dept:"DS",
    RollNo:25
}
console.log("data 1" ,data1);
console.log("data 2",data2);
function Obj(anyobj) {
    console.log(anyobj);
    console.log(`name is ${anyobj.name} and department is ${anyobj.Dept}`);
}
console.log("Object passed in function");
Obj(data1)
Obj(data2)
// Passing by destructuring the object 
function DesEx({name,RollNo}) {
    console.log(`name is ${name}, roll no is ${RollNo}`);
    
}
DesEx(data1);