class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.items[this.tail] = element
        this.tail++
    }

    dequeue() {
        const item = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return item
    }

    isEmpty() {
        return this.tail - this.head === 0
    }

    peak() {
        // if (!this.isEmpty())
        return this.items[this.head]
        // return null
    }

    size() {
        return this.tail - this.head
    }

    print() {
        console.log(this.items)
    }
}

const q = new Queue()
console.log(q.peak())

console.log(q.isEmpty());

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

console.log(q.size())

q.print()

console.log(q.dequeue())
q.print()
console.log(q.peak())
q.print()