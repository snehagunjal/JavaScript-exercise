/*math objects and methods */
console.log(Math);


//Absolute value
console.log(Math.abs(-6));

//round() rounds off to the nearest integer
console.log(Math.round(10.6));

//ceil() round off to the next integer
console.log(Math.ceil(3.4));

//floor() rounds off to the previous integer
console.log(Math.floor(34.3));

console.log(Math.PI); //show value of PI
console.log(Math.E) //value of E

//Min and Max 
console.log("Minimum Value: ",Math.min(5,4,3,2,1));
console.log("Maximum Value: ",Math.max(1,3,5,36,44,99));

//Randon Number 
console.log(Math.random()); //random number from 0 and 1
console.log(Math.random()*10+1); // random number from 1 and 10
console.log(Math.floor(Math.random()*100)); //random number from 0 to 100

//formula for generating a random number between two number
const min = 1;
const max = 10;
console.log(Math.floor(Math.random()*(10-1+1))+1); //random number between 