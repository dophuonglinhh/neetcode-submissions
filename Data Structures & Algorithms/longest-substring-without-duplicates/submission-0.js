class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const count = new Array(128).fill(0);
        let maxLength = 0;
        let left = 0;
        
        for (let right = 0; right < s.length; right++) {
            count[s.charCodeAt(right)] += 1;

            while (count[s.charCodeAt(right)] > 1) {
                count[s.charCodeAt(left)] -= 1;
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1)
        }

        return maxLength;
    }
}
