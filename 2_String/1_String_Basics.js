
//* Creating String
const string1 = new String("Akshay");
const string2 = "akshay";
const string3 = 'akshay';

// using backtics
const string4 = `
${string3}
avinash
patankar`;
// console.log(string4);

//* write console.log using backtics
const st = "world"
//console.log`hello ${st} how are ${"you"}`

// Tagged Literals Example function (***interview question***)
function test (string, youtubeChannel, person) {
    //console.log(string,youtubeChannel, person)
return;
}

const channel = "RoadsideCoder"
const name = "Piyush"
test`Subscribe to ${channel} run by ${name}`

//* Strings length
const str = "Subscribe to RoadsideCoder!";
//console.log(str.length);

//* Accessing Characters
// console.log(str[3])
// console.log(str.charAt(2))
 
//* Looping
for (let i = 0; i < str.length; i++) {
    //console.log(str[i]);  
}

for(let i of str){
    //console.log(i);
}

//* Modifying Strings
str[3] = "b" // can't do this (strings are immutable)
//console.log(str.replace("Subscribe","sub")) // it returns new string
//console.log(str.replace("s","b"));// replaces first instance of that character or word
//console.log(str.replaceAll("e","c"))// replaces all instance of that character or word

//* Concat
//console.log(str.concat(" and share this video")) // joins 2 strings

//* Trim
const newStr = "    Hello  World    ";
//console.log(newStr.trim()); // removes spaces from beginning and end

//* Searching
//console.log(str.indexOf("Coder")) // index of a character or word's first appearance

//console.log(str.lastIndexOf("e")) // index of a character or word's last appearance
//console.log(str.indexOf("e")) // index of first appearance of "e"

//* Checks
// console.log(str.startsWith("S"))
// console.log(str.endsWith("!"))

//* Extracting Substrings
// console.log(str.substring(13, 26))
// console.log(str.slice(-14, -1)) 

// Converting Case
const toBeConverted = {name:"Piyush"}
console.log(toBeConverted);

//console.log(String(toBeConverted)) // [object Object]

//onsole.log(JSON.stringify(toBeConverted)) // '{"name":"Piyush"}'


str.toUpperCase() // converts to uppercase
str.toLowerCase() // converts to lowercase

str.charCodeAt(0) // returns ASCII Code
String.fromCharCode(65) // returns character from ASCII Code

// String Comparison
const str1 = "apple"
const str2 = "apple"

str1.localeCompare(str2) // compare strings

str.includes("Subscribe") // checks if a word exists inside a string