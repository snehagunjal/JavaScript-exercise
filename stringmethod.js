// String method
let ngame = "neha";
console.log(ngame);
console.log(ngame.charAt(3));
console.log(ngame.length);
console.log(ngame.toUpperCase());
console.log(ngame.__proto__);
console.log(ngame[1]);
console.log(ngame.indexOf("h"));

//Substring method - negative values are not allowed 
const ytname = "Nehagunjal";
const subString = ytname.substring(0, 9);
console.log("Substring = ",subString);

//slice method - negative values are allowed
const slice = ytname.slice(-7);
console.log(slice);

//Trim method  - removes extra spaces(not of the middle, only at beginning and ending)
const newname = "      suresh      gunjal   NEHA";
console.log(newname);
console.log(newname.trim());

//replace method 
const hacking = "url.com";
const newhack = hacking.replace(".", "@");
console.log("old was url.com and the new is = ",newhack);

//include method (which tells true/false depending the word is there or not)
console.log(newhack.includes("url"));

// split method (splits string into array)
console.log(newhack.split("-"));