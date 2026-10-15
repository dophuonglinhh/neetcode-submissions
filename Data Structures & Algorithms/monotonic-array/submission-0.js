class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let isInc = true;
        let isDec = true;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                isDec = false;
            } 
            
            if (nums[i] < nums[i - 1]) {
                isInc = false;
            }
        }

        return isInc || isDec;
    }
}
