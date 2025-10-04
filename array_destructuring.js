/*Array Destructuring 
  def - clean way to unpack values of array into an individual variable*/

let book = ["Programming", 300, 500];
let [bname, pages, price] = book;
console.log(`Book name: ${bname},  \nPages: ${pages}, \nprice: ${price}`);

//Skipping Values   
let [onlyname, , onlypages = 90] = book;
console.log(onlyname, onlypages)

//Default Values (only applied when extracted values are undefined)
let [bname1, pages2, price3, Author = "holy jackson",] = book
console.log(bname1, pages2, price3, Author)

//Nested Array
let arr = [1, 2, "Meghraj", true, undefined, ["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];
let [val1, val2, val3, val4, val5, sixth, [m, n, o], [p, q, r]] = arr;

console.log(val1);
console.log(val2);
console.log(val3);
console.log(sixth);
console.log(m);
console.log(n);
console.log(o);
console.log(p);
console.log(q);
console.log(r);

//detructuring with return value
function getbk() {
    return ['neha', 20, "5'5"];
}

let [name1, age, height] = getbk();

console.log("Name: ", name1);
console.log("age: ", age);
console.log("height: ", height);