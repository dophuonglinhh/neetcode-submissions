class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0;
        let count = 0;

        for (let num of nums) {
            count = num === 1 ? count + 1 : 0;
            max = Math.max(max, count);
        }

        return max;
    }
}
