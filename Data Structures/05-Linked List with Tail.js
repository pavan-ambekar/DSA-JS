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

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }
        let removedNode
        if (index === 0) {
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next

        }

        this.size--
        return removedNode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next) {
                if (prev.next.value === value) {
                    const removedNode = prev.next
                    prev.next = removedNode.next
                    this.size--
                    return value
                }
                prev = prev.next
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        } else {
            let current = this.head
            let i = 0
            while (current) {
                if (current.value === value) {
                    return i
                }
                current = current.next
                i++
            }
            return -1
        }
    }

    reverse() {
        let prev = null
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
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

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()