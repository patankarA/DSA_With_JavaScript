//* Declaration of Array
let arr1 = new Array(1,2);
// Or
let arr = ["a", 1, {name:"akshay", age:25}]; // store any data form

//* Access Elements of Array
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[2].name);

//* Length property (it is not function)
let len = arr.length;

//* Add and Remove element at the end of the Array
arr.push("d");

arr.pop();


//* Add and Remove element at the front of the Array
arr.unshift("d");

arr.shift();

//* Looping Arrays

// 1. For Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);  
}

// 2. While Loop
let i = 0;
while (i < arr.length) {
  //console.log(arr[i]);
  i++;
}

//* Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach((item, index, arr) => {
    //console.log(item, index)
})

// map in javascript
const newNum = numbers.map((item, index, arr) => {
    return item + 1;
});

// filter in javascript
const newNum2 = numbers.filter((item, index, arr) => {
    return item > 3;
});

// reduce in javascript
const numSum = numbers.reduce((prev, item) => {
    return prev + item;
}, 0);

// some in javascript (returns true or false)
const numSome = numbers.some((item, index, arr) => {
    return item > 3; // if any element > 3 it return true
});

// every in javascript (returns true or false)
const numEvery = numbers.every((item, index, arr) => {
    return item > 3; // if evey element is > 3 it return true
});

// find in javascript
const numFind = numbers.find((item, index, arr) => {
    return item > 3; // Returns the value of the first element in the array where predicate is true, and undefined otherwise.
});

//* FindIndex (Returns the index of the first element in the array where predicate is true, and -1 otherwise.)
const index = numbers.findIndex((item) => {
    return item == 3
});

//* Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

// Spread Operator
const finalNum = [...nums, ...nums2];
//console.log(finalNum)

// Rest Operator( take all the params )
function sum(...numbers) {
    return numbers;
}
//console.log(sum(nums, nums2, 5, "hello"));

//* Concat (Combines two or more arrays. This method returns a new array without modifying any existing arrays.)
const mergeNums = nums.concat(nums2, arr);

//* Slice (Returns a copy of a section of an array)
const sliceArr = arr.slice(0,2); // last index not inclueded
const sliceArr2 = arr.slice(-2); // Element from last 2nd index to end

//* Splice (Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.)
const spliceArr = arr.splice(1, 2, "orange"); // index, no. of ele want to del, new eles want to add

//* Fill (Changes all array elements from start to end index to a static value and returns the modified array)
const dummy = [2, 5, 1, 6];
dummy.fill(0, 1, 3);// value, indexStart, end

//* Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]
const flattenedArray = flatEx.flat(2); // 2 levels

//* Reverse
nums.reverse();

//* Sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => a - b); // asccending order



