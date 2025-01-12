// This keyword
const name="john"
const Dept="DS"
const myobj={name:"Aasif",
    Dept:"CSE",
    myfun:function () {
        console.log(`name is ${name} and department is ${Dept}`);
    }
}
myobj.myfun()
const myobj2={name:"Aasif",
    Dept:"CSE",
    myfun:function () {
        console.log(`name is ${this.name} and department is ${this.Dept}`);
    }
}
myobj2.myfun()
// not recommended folowing approach
const myobj3={name:"Aasif",
    Dept:"CSE",
    myfun:function () {
        console.log(`name is ${myobj3.name} and department is ${myobj3.Dept}`);
    }
}
myobj3.myfun()
// arrow functions
// ex1
const greet=()=> {
    console.log("hello world");
}
greet()
// ex2
const Sum=(num1,num2)=> {return num1+num2};
console.log(Sum(5,5));
//Or
const Sub=(num1,num2)=>(num1-num2);
console.log(Sub(100,50))
// ex3
const mydata=()=>({name:"john"})
console.log(mydata());
// ex4
// can be called using iif concept
(()=>{console.log("hello");})();