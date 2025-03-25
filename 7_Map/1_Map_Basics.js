// initialize empty Map

// let data = new Map();
// console.log(data); // Map(0) {}

// initialize with some key and value

let data = new Map([
    ['name', 'akshay'],
    [ true , 'bool key'],
    [1, false],
]);
// console.log(data); // Map(3) { 'name' => 'akshay', true => 'bool key', 1 => false }

// add values inside Map
data.set('color', 'green');

// get values
// console.log(data.get('name')); // akshay

// size of Map
// console.log(data.size); // 4

// has key 
// console.log(data.has('color')); // true

// loops in map
// for(let i of data) {
//     console.log(i) // [ 'name', 'akshay' ][ true, 'bool key' ][ 1, false ][ 'color', 'green' ]
// }
// use i[0] for keys and i[1] for values

// data.forEach((value, key)=>{
//     console.log(key, value)
// })

// Remove element from Map
// console.log(data.delete('color')) // true

// Return all entries of Map
// console.log(data.entries());

// Return all keys
// console.log(data.keys()); // { 'name', true, 1, 'color' }

// Return all values
// console.log(data.values()); // { 'akshay', 'bool key', false, 'green' }

// clear
// data.clear();

//console.log(data);

