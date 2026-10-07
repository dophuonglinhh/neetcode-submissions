class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let operations = 0;

        for (let log of logs) {
            if (log === "../") {
                if (operations > 0) {
                    operations--;
                }
            } else if (log !== "./") {
                operations++;
            }
        }

        return operations;
    }
}
