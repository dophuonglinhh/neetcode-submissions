class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        const set = new Set();

        for (let num of nums) {
            if (set.has(num)) {
                set.delete(num);
                continue;
            }
            set.add(num);
        }

        return set.size === 0;
    }
}
