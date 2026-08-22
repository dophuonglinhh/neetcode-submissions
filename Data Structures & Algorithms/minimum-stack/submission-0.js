class MinStack {
    constructor() {
        this.items = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.items.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = this.items[0];
        for (const item of this.items) {
            min = Math.min(min, item)
        }

        return min;
    }
}
