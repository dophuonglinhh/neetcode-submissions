class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const records = [];

        for (let ops of operations) {
            let n = records.length;

            if (ops === "+") {
                records.push(records[n-1] + records[n-2]);
            } else if (ops === "C") {
                records.pop();
            } else if (ops === "D") {
                records.push(records[n-1] * 2);
            } else {
                records.push(Number(ops));
            }
        }

        return records.reduce((total, num) => total + num, 0);
    }
}
