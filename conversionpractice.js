//convert to number
 let score = "33";
 let value = Number(score);
 console.log(value);      // 33
 console.log(typeof value); // number

let score1 = null;
let nullnum = Number(score1);
console.log(nullnum);

let score2 = undefined;
let undefinednum = Number(score2);
console.log(undefinednum);

let score3 = "33abc";
let stringtonum = Number(score3);
console.log(stringtonum);

let score4 = "abc33";
let alphanum = Number(score4);
console.log(alphanum);

//boolean coversion 
let login = 1;
let boolean1 = Boolean(login);
console.log(boolean1);

let logout = 0;
let boolean0 = Boolean(logout);
console.log(boolean0);

//convert ot string
let num = 33;
let stringnum = String(num);
console.log(stringnum);
console.log(typeof stringnum);

let booltrue = String(true);
console.log(booltrue);
console.log(typeof booltrue);

//convert to boolean 
let empty = "";
let con = Boolean(empty);
console.log(con)

let notempty = "Neha";
let con1 = Boolean(notempty);
console.log(con1);

let emptyarr = [];
let con2 = Boolean(emptyarr);
console.log(con2);

let nonemptyarr = [1,2];
let con3 = Boolean(nonemptyarr);
console.log("3", con3);