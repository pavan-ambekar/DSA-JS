import LinkedList from "./LinkedList.js"

class Stack {
    constructor() {
        this.list = new LinkedList()
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.size
    }

    push(value) {
        return this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront()
    }

    peak() {
        return this.list.head.value
    }

    print() {
        this.list.print()
    }
}


const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.getSize())
stack.print()
console.log(stack.pop())
console.log(stack.peak())