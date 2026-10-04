class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let insertIndex = 0;

        for (let num of nums) {
            if (num !== 0) {
                nums[insertIndex] = num;
                insertIndex++;
            }
        }

        while (insertIndex < nums.length) {
            nums[insertIndex] = 0;
            insertIndex++;
        }
    }
}
