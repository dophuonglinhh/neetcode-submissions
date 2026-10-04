class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k %= n;
        if (k === 0)    return nums;
        
        const temp = Array(k).fill(0);
        
        for (let i = 0; i < k; i++) {
            temp[i] = nums[n - k + i];
        }
        
        for (let i = n - 1, j = 1; i >= k; i--, j++) {
            nums[i] = nums[n - k - j];
        }

        for (let i = k - 1; i >= 0; i--) {
            nums[i] = temp[i];
        }

        return nums;
    }
}
