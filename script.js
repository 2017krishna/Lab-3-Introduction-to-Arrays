let myArray = ["one", 2, "three", 4, 5];

console.log("myArray:", myArray);

let firstElement = myArray[0];

let lastElement = myArray[myArray.length - 1];

let middleElement = myArray[Math.floor(myArray.length / 2)];

let arrayLength = myArray.length;

console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
console.log("Middle Element:", middleElement);
console.log("Number of elements in the array:", arrayLength);

let pushElement = myArray.push("six");

console.log("after myArray.push('six')", myArray);
console.log("Length of array after pushed element:", pushElement);

let popElement = myArray.pop();

console.log("After myArray.pop():", myArray);
console.log("Popped element:", popElement);

myArray.unshift(0);

console.log("After myArray.unshift(0)", myArray);

let shiftElement = myArray.shift();

console.log("After .shift():", myArray);
console.log("Shifted element:", shiftElement);

myArray.splice(1, 1, "newElement1");

console.log("After myArray.splice(1, 1, 'newElement1'):", myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log("Element at index", i, ":", myArray[i]);}

myArray.forEach((element, index) => {
    console.log("Element at index", index, ":", element);});

const [firstA, secondA, ...restA] = myArray;

console.log("First element:", firstA);
console.log("Second element:", secondA);
console.log("Rest of the elements:", restA);