// ! Stack Implementation Using Array

class Stack{
    constructor() {
        this.items = []
    }

    add(elem) {
        return this.items.push(elem)
    }

    remove() {
        if (this.items.length > 0) {
            return this.items.pop()
        }
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isSize() {
        return this.items.length
    }

    isEmpty() {
        return this.items.length === 0
    }
}

let stack = new Stack()

stack.add(10)
stack.add(100)
stack.add(1000)
stack.add(200)

console.log(stack);

console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.isSize());