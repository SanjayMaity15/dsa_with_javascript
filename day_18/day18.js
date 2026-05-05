class Queue{
    constructor(size) {
        this.queue = new Array()
        this.front = 0;
        this.rear = -1;
        this.size = size;
    }

    enqueue(elem) {
        if (this.rear === this.size - 1) {
            return "Queue overflow"
        } else {
            this.rear++;
            this.queue[this.rear] = elem;
        }
    }

    dequeue() {
        if (this.front > this.rear) {
            return "Queue underflow"
        } else {
            let popElem = this.queue[this.front]
            this.front++
            return popElem
        }
    }

    peek() {
        if (this.front > this.rear) {
            return "Queue underflow"
        } else {
            return this.queue[this.front]
        }
    }

    isEmpty() {
        return this.front > this.rear
    }

    isSize() {
        return this.rear - this.front + 1
    }
}


let queue = new Queue(3)

queue.enqueue(1)
queue.enqueue(2)
console.log(queue.enqueue(4));
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.isSize());