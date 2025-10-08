//Anonymous Function

//Normal function
function greet(){
    console.log("Hello");
}

//Anonymous function - without name

// function(){    (no name after function)
// console.log("hello");
// }

//They are used when you dont need to reuse a function 
setTimeout(function(){
    console.log("This runs after 2 seconds.");
}, 2000);
console.log("This runs immediately.")

//Also used to assign a variable
 let greet1 = function(){
    console.log("Good Morning")
 };
 greet1();

 //Arrow Function
 const greet2 = () =>{
console.log("Hello")
 }
greet2();