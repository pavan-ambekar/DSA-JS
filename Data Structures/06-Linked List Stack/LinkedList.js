class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.tail = node
        } else {
            node.next = this.head
        }
        this.head = node
        this.size++
    }

    // O(1)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.size++
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null
        } else {
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null
        } else {
            const value = this.tail.value
            if (this.search === 1) {
                this.head = null
                this.tail = null
            } else {
                let prev = this.head
                while (prev.next !== this.tail) {
                    prev = prev.next
                }
                prev.next = null
                this.tail = prev
            }
            this.size--
            return value
        }
    }





    print() {
        if (this.isEmpty()) {
            console.log('List is empty.')
        } else {
            let current = this.head
            let values = ''
            while (current) {
                values += `${current.value} `
                current = current.next
            }
            console.log(values)
        }
    }
}


export default LinkedList