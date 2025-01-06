// . and [key] 
const obj={name:{fullname:{ first:"md",last:"Aasif"}},
Dept:"Comp",Addr:"IND"}
console.log(obj);
console.log(obj.name.fullname.first);
console.log(obj["name"]);
console.log(obj["name"["fullname"["first"]]]); //cant access
const obj1={"full name":"John",
Dept:"DataSc",
"Roll no":23
}
// cant access full name with . operator
console.log(obj1["full name"]);
