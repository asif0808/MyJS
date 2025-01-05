const batters=["smith","marnus","reddy","kl"];
const bowlers=["boland","starc","bumrah"];
console.log(batters,batters.length);
console.log(bowlers,bowlers.length);
// adding/merging both arrays
// push(),concat(),spread operator(...)
// batters.push(bowlers) //push() good for individual values
console.log(batters); 
//concat()-- good for merging two arrays
const team=batters.concat(bowlers)
console.log(batters);
console.log(team);
console.log(team.join(),typeof team.join());
const all_round=["jads","ash"];
// using spread
const team2=[...batters,...all_round,...bowlers]
console.log(team2);
// flat()
const data=[3,4,5,7,[56,6,0],78,[7,[7,89,9],10],77]
console.log(data.flat()); //default 1 depth
console.log(data.flat(2));
console.log(data.flat(Infinity));




