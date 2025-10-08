/* Rest Parameter */
//Rest parameter is used to collect multiple arguments in a single array
//Syntax - (...)

function show(...numbers) {
  console.log("Numbers shown using rest parameter: ",numbers);
}

show(1, 2, 3, 4, 5);

//example 2
function sumall(...nums){
    let total = 0;

    for(let num of nums){
        total += num;
    }
    console.log("Total:",total);
}
sumall(1,2,3,4);


//Always define rest parameter at the end
function intro(fname, lname, ...hobbies){
    console.log(`Hi my name is ${fname} ${lname}`);

    if(hobbies.length>0){
        console.log("My hobbies are:", hobbies.toString());
    }
    else{
        console.log("I have no hobbies.")
    }
}
intro("Neha", "Gunjal", 'Reading ', "Playing BB")

//Spread operator
//Used to expand multiple elements of and array or object into a individual item
 
function combine(){
    let n1 = [1,2,3];
    let n2 = [4,5,6];
    let combine = [...n1, ...n2]
    // let concat = n1.concat(n2);

    console.log(combine);
    console.log(n1)
}
combine();

//example 2 
const array = [20,30,40];
const modified = [10, ...array, 50];
console.log("Modified array:", modified);


//example with object 
let obj = {name: "Neha", lastname: "Gunjal"}
let obj1 = {...obj};
console.log(obj1);