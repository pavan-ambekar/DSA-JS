class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
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
        if (!this.isEmpty())
            node.next = this.head

        this.head = node
        this.size++
    }

    // O(N)
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    insert(index, value) {
        if (index < 0 || index > this.size) {
            return -1
        } else if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
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

const list = new LinkedList()

console.log('isEmpty: ', list.isEmpty())
console.log('size', list.getSize())

list.prepend(10)
list.print()
list.prepend(20)
list.prepend(30)
list.append(40)
list.append(50)

console.log('isEmpty: ', list.isEmpty())
console.log('size', list.getSize())

list.insert(3, 33)
list.print()
list.insert(0, 2)
list.insert(7, 25)

list.print()