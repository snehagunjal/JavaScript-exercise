
//Array.from() converts string to array. each char becomes an element 
let myname = "Neha";
console.log(Array.from(myname));  

//Array.of() makes array from the arguments provided
let num10 = [2,1,3,4];
let num20 = [5,6,7];
console.log(Array.of(num10, num20).flat());

//multidimensional array
const num11 = [1,2,3];
const num2 = [4,5,6];
console.log(num11.push(num2)); //it will show length output
console.log(num11[2]);

//concat() - merges two or more arrays together
let a = [12,13,14];
let b = [15,16];
let c = console.log(a.concat(b))

//spread operator - extracts all elements of an array and puts them into a new array.
let d = [...a, ...b];
console.log("Spread operator: ",d);

//flat() - flattens nested arrays up to level depth. 
const another_array = [1, 2, 3, [4, 5, 6], 7, [11, 12, ["a", "b"]]];
console.log("flattens 1 level of nested arrays",another_array.flat(1));
console.log("flattens 2 levels, including arrays inside arrays",another_array.flat(2));

//isArray() - checks if the array is array 
console.log(Array.isArray(another_array));

//Object.entries() - converts the object into array in key value pairs.
let info = {name:'Neha', Age:21, upiid: 112};
let obj_to_array = Object.entries(info);
console.log(obj_to_array.flat());


