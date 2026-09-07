class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // let p1 = m - 1;
        // let p2 = n - 1;
        // let i = nums1.length - 1;

        // while (p2 >= 0) {
        //     if (nums1[p1] > nums2[p2] && p1 >= 0) {
        //         nums1[i] = nums1[p1];
        //         p1--;
        //     } else {
        //         nums1[i] = nums2[p2];
        //         p2--;
        //     }
        //     i--;
        // }

        for (let i = m, j = 0; j < n; i++, j++) {
            nums1[i] = nums2[j];
        }
        nums1.sort((a,b) => a - b)

    }
}
