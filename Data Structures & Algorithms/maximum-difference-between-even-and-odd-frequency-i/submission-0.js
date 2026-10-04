class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const count = new Array(26).fill(0);
        const base = 'a'.charCodeAt(0);

        for (let char of s) {
            count[char.charCodeAt(0) - base]++;
        }

        let maxOdd = 0;
        let minEven = Infinity;

        for (let num of count) {
            if (num === 0)  continue;
            if (num % 2 === 0) {
                minEven = Math.min(minEven, num);
            } else {
                maxOdd = Math.max(maxOdd, num);
            }
        }

        return maxOdd - minEven;
    }
}
