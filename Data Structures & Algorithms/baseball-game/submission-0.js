class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (let ops of operations) {
            let n = stack.length;

            if (ops === "+") {
                stack.push(stack[n-1] + stack[n-2]);
            } else if (ops === "C") {
                stack.pop();
            } else if (ops === "D") {
                stack.push(stack[n-1] * 2);
            } else {
                stack.push(Number(ops));
            }
        }

        let res = 0;
        while (stack.length > 0) {
            res += stack.pop();
        }

        return res;
    }
}
