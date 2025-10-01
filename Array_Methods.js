//Array Declaration

let myarr = [1,2,3,4,5];
console.log(myarr[0]);
console.log(myarr[1]);
console.log(myarr[2]);
console.log(myarr[3]);
console.log(myarr[4]);

//array declaration using new keyword 
let arr = new Array(1, 2, 3, 4, 5);
console.log('Old value: ',arr);
 //push() adds element at the end
arr.push(11);
console.log('values after push: ',arr);

//pop() removes the last element of array
arr.pop();
console.log("values after using pop(): ",arr);

//unshift() adds element in the start, shifts the rest element to the right
arr.unshift(0)
console.log("values after Unshift(): ",arr);

//shift() removes first element of the array 
arr.shift();
console.log("Values using shift(): ",arr);

//includes() it checks if the element is present in the array or not
arr.includes(3);
console.log("Values using includes(): ",arr);

//indexof() returns the index of the element 
console.log("Indexof(): ", arr.indexOf(1));

//join() convert the array into string and then uses the custom separator
console.log("converts array into string after using join(): ",arr.join());

//toString() converts into string (default separator comma - fixed)
console.log("toString(): ",arr.toString());

//concat() it merge 2 array and then returns new array
let arr2 = [11,22,33];
console.log("After using concat()", arr.concat(arr2));

//reverse() reverse the elements 
console.log("Reverse(): ",arr.reverse());

//sort() 
let object = ["cherry", "bakery", "animal", "zebra", 'snake'];
console.log("Sorts in alphabetical order: ",object.sort());

let num = [5,4,3,2,1,10];
console.log("Even the numbers are sorted in alphabetical order (10 comes before 2): ",num.sort());

//to solve this we use ((a,b) => a-b) for ascending order and ((a,b) => b-a) for descending order
console.log(num.sort((a,b) => a-b));
console.log(num.sort((a,b) => b-a));

//slice() - removes the element or portion of array 
console.log(arr.reverse());
console.log(arr.slice(1,4)); //will not vanish, it will give those selected index 

//splice() - it removes, add and replace an array
//Syntax - array.splice(start, deleteCount, item1, item2, ..., itemN)
console.log("Here it is showing that they are removing 2 and 3 :", arr.splice(1,2, 11, 22));
console.log("Elements after using splice():", arr)




