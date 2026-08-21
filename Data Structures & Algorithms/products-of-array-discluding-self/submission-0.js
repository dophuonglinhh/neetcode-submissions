class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const prefix = new Array(n);  // prefix[i]: product of all elements before nums[i]
        const suffix = new Array(n);  // suff[i]: product of all elements after nums[i]
        const res = new Array(n);   // res[i] = pref[i] * suff[i]

        prefix[0] = 1;
        suffix[n - 1] = 1;
        
        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i-1] * prefix[i-1];
        }

        for (let i = n-2; i >= 0; i--) {
            suffix[i] =  nums[i+1] * suffix[i+1];
        }

        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * suffix[i];
        }

        return res;
    }
}
