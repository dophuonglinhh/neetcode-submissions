class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        if (nums.length <= 2) {
            if (k === 1) return [nums[0]];
            if (k === 2) return [nums[0], nums[1]]
        }
        
        const mapCount = new Map();

        for (let num of nums) {
            mapCount.set(num, (mapCount.get(num) || 0) + 1);
        }

        const groupCount = new Array(nums.length + 1);

        for (let [key, val] of mapCount) {
            if (!groupCount[val]) {
                groupCount[val] = [];
            }
            groupCount[val].push(key);
        }

        const res = [];
        for (let i = groupCount.length - 1; i > 0; i--) {
            // if (res.length === k) {
            //     return res;
            // }
            if (groupCount[i] !== undefined) {
                for (let num of groupCount[i]) {
                    res.push(num);
                    if (res.length === k) {
                        return res;
                    }
                }
                // res.push(...groupCount[i]);
            }            
        } 

    }
}
