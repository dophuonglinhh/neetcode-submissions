class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n);   // res[i] = pref[i] * suff[i]

        res[0] = 1;
        res[n - 1] = 1;

        // res[i] = product of all elements before nums[i]
        let product = 1;
        for (let i = 1; i < n; i++) {
            product *= nums[i-1];
            res[i] = product;
        }

        // res[i] = res[i] * product of all elements after nums[i]
        product = 1;
        for (let i = n-2; i >= 0; i--) {
            product *= nums[i+1];
            res[i] *= product
        }

        return res;
    }
}
