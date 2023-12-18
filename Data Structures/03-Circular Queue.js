class CircularQueue {
    constructor(capacity) {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.head = -1
        this.tail = -1
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    size() {
        return this.currentLength;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.tail = (this.tail + 1) % this.capacity
            this.items[this.tail] = element
            this.currentLength++
            if (this.head === -1)
                this.head = this.tail
        }
    }

    dequeue() {
        if (this.isEmpty())
            return null
        const item = this.items[this.head]
        this.items[this.head] = null
        this.head = (this.head + 1) % this.capacity
        this.currentLength--
        if (this.isEmpty()) {
            this.head = -1
            this.tail = -1
        }
        return item
    }

    peak() {
        if (this.isEmpty()) return null
        return this.items[this.head]
    }

    print() {
        if (this.isEmpty())
            console.log('Queue is Empty')
        else {
            let i
            let str = ''
            for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity)
                str += `${this.items[i]} `
            str += `${this.items[i]} `
            console.log(str)
        }
    }
}

const q = new CircularQueue(5)

console.log(q.isEmpty())

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)

console.log(q.isFull())

q.print()

console.log(q.dequeue())
q.print()

console.log((q.peak()));
q.print()
q.enqueue(5678)
q.print()