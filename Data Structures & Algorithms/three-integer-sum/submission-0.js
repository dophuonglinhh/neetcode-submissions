class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const group = new Map();
        for (let i = 0; i < nums.length; i++) {
            const seen = new Map();
            const twoSum = -nums[i];    // target = 0 --> 0 - nums[i]
            let j = i + 1;

            while (j < nums.length) {
                let need = twoSum - nums[j];
                if (seen.has(nums[j])) {
                    const arr = [nums[i], nums[j], seen.get(nums[j])].sort((a,b) => a-b);
                    const key = arr.toString();
                    group.set(key, arr);
                }
                seen.set(need, nums[j]);
                j++;
            }
        }

        return [...group.values()]
    }
}
