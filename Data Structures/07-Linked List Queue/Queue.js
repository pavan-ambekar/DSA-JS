import LinkedList from "../06-Linked List Stack/LinkedList.js";

class Queue {
    constructor() {
        this.list = new LinkedList()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.size
    }

    enqueue(value) {
        return this.list.append(value)
    }

    dequeue() {
        return this.list.removeFromFront()
    }

    peak() {
        return this.list.head.value
    }

    print() {
        this.list.print()
    }
}

const q = new Queue()

console.log(q.isEmpty())

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.print()
console.log(q.getSize())
console.log(q.dequeue())
console.log(q.peak())
q.print()