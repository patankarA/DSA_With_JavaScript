// Basic Queue Implementation

class Queue{
    // Initializing Queue class variables.
    constructor() {
        this.queue = [];
    }

    // Insert Element
    enqueue(element) {
        this.queue.push(element);
    }

    // Remove Element
    dequeue() {
        if(this.isEmpty()) {
            return "Underflow";
        }
        return this.queue.shift();
    }

    // Front Ele
    front() {
        if(this.isEmpty()) {
            return "No Elements in the Queue";
        }
        return this.queue[0];
    }

    // isEmpty
    isEmpty() {
        return this.size() === 0;
    }

    // size
    size() {
        return this.queue.length;
    }

    printQueue() {
        if(this.isEmpty()) {
            return "No Elements in the Queue";
        }

        let arr = [...this.queue]; // deep copy
        console.log(arr); 
    }
}

let queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

console.log(queue.dequeue());

console.log(queue.front());

console.log(queue.isEmpty());

console.log(queue.size());

queue.printQueue();