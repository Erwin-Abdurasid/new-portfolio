export default class Stack {
    constructor() {
        this.storage = {};
        this.count = 0;
    }

    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        let returnValue = this.storage[this.count];
        delete this.storage[this.count];

        return returnValue;
    }

    peek() {
        return this.storage[this.count - 1];
    }

    clear() {
        this.storage = {};
        this.count = 0;
    }
}