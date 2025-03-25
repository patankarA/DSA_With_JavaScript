// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

const reverseWords = function(s) {
    const splitS = s.split(" ");
    // console.log(splitS);
    
    
    const stack = [];

    // push splited string in stack
    for(let i of splitS) {
        stack.push(i);
    }

    let ans = "";

    while(stack.length) {
        const current = stack.pop();

        if(current) {
            ans += " " + current;
        }
    }

    return ans.trim();
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
