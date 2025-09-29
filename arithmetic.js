let somenum = 33;
let stringnum = String(somenum);
console.table({ Number: stringnum, Type: typeof stringnum });

let value = 3;
let negValue = -value;  // Corrected variable name
console.log(value);     // 3
console.log(negValue);  // -3

console.table([
  stringnum,
  typeof stringnum,
  value,
  negValue,
  2 + 2,   // 4
  2 - 2,   // 0
  2 * 2,   // 4
  2 ** 3,  // 8 (2 to the power 3)
  10 / 2,  // 5
  50 % 2   // 0 (remainder)
]);


//additon of string
let str1 = "Hello";
let str2 = " Neha";
let str3 = str1 + str2;
console.log(str3);

let str = "Javascript";
let str4 = " is awesome";
let join = str + str4;
let numtostr = 50 + " Apples";
console.table([join, numtostr]);

// complex situation
console.log(+true);

//prefix and postfix 
let game = 100;
game++; //Postfix: use value then increment
console.log(game);  //101

let game1 = 100;
++game1; //Prefix: increment then use value
console.log(game1);  //101

let ngame = "neha";
console.log(ngame);
console.log(ngame.charAt(3));
console.log(ngame.length);
console.log(ngame.toUpperCase());
console.log(ngame.__proto__);
console.log(ngame[1]);
console.log(ngame.indexOf(h));
