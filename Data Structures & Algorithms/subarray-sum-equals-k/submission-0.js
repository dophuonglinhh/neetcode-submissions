class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let total = 0;

        for (let i = 0; i < nums.length; i++) {
            let currentSum = nums[i];
            if (currentSum === k) {
                total++;
            }

            for (let j = i + 1; j < nums.length; j++) {
                currentSum += nums[j];
                if (currentSum === k) {
                    total++;
                }
            }
        }

        return total;
    }
}
