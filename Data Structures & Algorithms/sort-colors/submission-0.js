class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0);

        for (let color of nums) {
            count[color]++;
        }

        let index = 0;
        for (let i = 0; i < count.length; i++) {
            while (count[i] > 0) {
                nums[index] = i;
                index++;
                count[i]--;
            }
        }
    }
}
