class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLength = 0; 

        for (let num of nums) {
            // find starting point of sequence
            if (set.has(num - 1)) {
                continue;
            }

            let length = 1;
            while (set.has(num + 1)) {
                length++;
                num++;
            }

            maxLength = Math.max(length, maxLength);
        }

        return maxLength;
    }
}
