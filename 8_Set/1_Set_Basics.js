// initialize empty Set

// let data = new Set();
// console.log(data); // Set(0) {}

// intitialize with value

let data = new Set(["akshay", "rahul", 1, true, "akshay"]);
// console.log(data); // Set(4) { 'akshay', 'rahul', 1, true }

// add values
data.add("mohan");

// delete values
// console.log(data.delete(1)) // true

// size
// console.log(data.size); // 5

// loops
// for(let i of data) {
//     console.log(i)
// }

// data.forEach((item)=>{
//     console.log(item)
// })

// values
// console.log(data.values()); // [Set Iterator] { 'akshay', 'rahul', 1, true, 'mohan' }

// keys (keys and values are simillar in Set)
// console.log(data.keys()); // [Set Iterator] { 'akshay', 'rahul', 1, true, 'mohan' }

// has values
// console.log(data.has("rahul")); // true

// clear
// data.clear();

console.log(data);