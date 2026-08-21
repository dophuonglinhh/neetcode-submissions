class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Array(26).fill(0);
        const base = 'A'.charCodeAt(0);
        let maxLength = 0;
        let maxCount = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s.charCodeAt(right) - base;
            count[char]++;
            maxCount = Math.max(maxCount, count[char]);

            const windowLength = right - left + 1;
            if (windowLength - maxCount > k) {
                count[s.charCodeAt(left) - base]--;
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
