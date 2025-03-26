// Linked List in Javascript

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at head
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at Tail
    insertAtTail(data) {
        const newNode = new Node(data);

        if(!this.head) {
            this.head = newNode;
            return;
        }

        // traverse
        let current = this.head;
        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    // size of LinkedList
    size() {
         // traverse
         let count = 0;
         let current = this.head;
         while(current) {
            count = count + 1;
            current = current.next;
         }
         return count;
    }

    // Inset data at given Index
    InsertAtIndex(index, data) {
        if(index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }

        if(index === 0) {
            this.insertAtHead(data)
            return;
        }

        const newNode = new Node(data);

        // trevese
        const current = this.head;
        const prev = null;
        let count = 0;
        while(count !== index) {
            count++;
            prev = current;
            current = current.next; 
        }

        prev.next = newNode;
        newNode.next = current;
    }

    // Remove Front
    RemoveFront() {
        if(!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    // Remove End
    RemoveEnd() {
        if(!this.head) {
            return;
        }

        // traverse
        let current = this.head;
        while(current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    // Remove At Index
    RemoveAtIndex(index) {
        if(index < 0 || index > this.size()) {
            console.error("Invalid Index");
            return;
        }
        
        if(index === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        for(let i=0; i<index-1; i++) {
            current = current.next;
        }

        if(current.next) {
            current.next = current.next.next;
        }
    }

    // print
    printLinkedList() {
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedlist = new LinkedList();

linkedlist.insertAtHead(10);
linkedlist.insertAtHead(20);
linkedlist.insertAtHead(30);

linkedlist.insertAtTail(40);
linkedlist.insertAtTail(50);

linkedlist.RemoveFront()

linkedlist.RemoveEnd()

linkedlist.InsertAtIndex(0, 100)

linkedlist.RemoveAtIndex(3);

console.log(linkedlist.size());

linkedlist.printLinkedList();
