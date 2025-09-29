//Primitive datatype stored in stack
let yt = "nehayt";
let anotheryt = yt; //this is the copy, og wont change
anotheryt = "neha";

console.log(yt);
console.log(anotheryt);


//non primitive data type 
let user1 = {
    name: "Neha gunjal",
    email: "neha@123",
    id: 123
};

let user2 = user1; 

user2.email = "neha@456";
console.log(user1.email);
console.log(user2.email);
