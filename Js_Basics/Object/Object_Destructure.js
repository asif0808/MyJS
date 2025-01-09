const MyData={name: "Aasif A",
    Email:"aasif@gg.com",
    CourseName:"CompScience"
};
console.log(MyData);
//accessing properties
console.log(MyData.CourseName);
console.log(MyData["name"]);
//Object De-Structure
const {name,CourseName}=MyData;
console.log(name);
console.log(CourseName);
//renaming
const {name:fullName,Email:EmailId}=MyData;
console.log(fullName);
console.log(EmailId);
console.log(name);
console.log(MyData);

