// Basic Stack Implementation

class Stack {
    // Intialize Stack
    constructor() {
        this.stack = [];
    }

    // Push
    push(element) {
        this.stack.push(element);
    }

    // Pop
    pop() {
        if(this.isEmpty()){
            return "Stack is Empty."
        }
        return this.stack.pop();
    }

    // Peak
    peak() {
        if(this.isEmpty()){
            return "Stack is Empty."
        } 
        return this.stack[this.size() - 1];
    }

    // IsEmpty
    isEmpty() {
        return this.size() === 0;
    }

    // Size
    size() {
        return this.stack.length;
    }

    // Print Stack
    printStack() {
        
        if(this.isEmpty()) {
            return "stack is empty";
        }
        // Method 1
        // let arr = [];
        // for(let i=this.size()-1; i>=0; i--)
        // {
        //     arr.push(this.stack[i]);
        // }
        // return arr;

        // Method 2 (deep copy)
        let arr = [...this.stack]; // using spread operator
        arr.reverse();
        return arr;
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.printStack());

console.log(stack.peak());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.size());

console.log(stack.isEmpty());

console.log(stack.printStack());
