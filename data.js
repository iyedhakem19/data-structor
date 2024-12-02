 //1
 function sumOfUnion(setA, setB) {
    // Create a new Set by combining both sets (union of sets)
    const unionSet = new Set([...setA, ...setB]);

    // Convert the set to an array and sum the elements
    const sum = [...unionSet].reduce((acc, num) => acc + num, 0);

    return sum;
}
console.log(unionSet)
//2
function dot_product(v1, v2) {
    // Check if the vectors are of the same length
    if (v1.length !== v2.length) {
        throw new Error("Vectors must be of the same length");
    }

    // Initialize the sum for the dot product
    let sum = 0;

    // Calculate the dot product by summing up the products of corresponding elements
    for (let i = 0; i < v1.length; i++) {
        sum += v1[i] * v2[i];
    }

    return sum;
}



//3
// Define the Node class
class Node {
    constructor(value) {
        this.value = value;  // stores the value of the node
        this.next = null;    // points to the next node in the linked list
    }
}

// Function to delete a node at a given position
function deleteNode(head, position) {
    // Case 1: If the linked list is empty
    if (head === null) {
        console.log("The list is empty.");
        return null;
    }

    // Case 2: If the node to be deleted is the head node
    if (position === 0) {
        let temp = head;
        head = head.next;  // Move the head to the next node
        temp = null;  // Free memory of the deleted node
        return head;
    }

    // Case 3: Find the node just before the one to be deleted
    let current = head;
    let count = 0;

    // Traverse the list until we reach the node just before the one to delete
    while (current !== null && count < position - 1) {
        current = current.next;
        count++;
    }

    // If position is out of bounds
    if (current === null || current.next === null) {
        console.log("Position out of bounds.");
        return head;
    }

    // Node current.next is the node to be deleted
    let temp = current.next;
    current.next = current.next.next;  // Bypass the node to be deleted
    temp = null;  // Free memory of the deleted node

    return head;
}

// Helper function to print the list
function printList(head) {
    let current = head;
    while (current !== null) {
        console.log(current.value);
        current = current.next;
    }
}

// Example usage:
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original List:");
printList(head);

const positionToDelete = 2;  // Delete the node at position 2 (value 3)
const updatedHead = deleteNode(head, positionToDelete);

console.log("Updated List:");
printList(updatedHead);





//4
class Stack {
    constructor() {
        this.items = [];  // Array to hold stack elements
    }

    // Push an item onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an item from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    // Peek the top item of the stack
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the size of the stack
    size() {
        return this.items.length;
    }
}
