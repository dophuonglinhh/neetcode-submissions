class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length)  return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const base = "a".charCodeAt(0);

        // count freq for s1 & 1st window in s2
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - base]++;
            s2Count[s2.charCodeAt(i) - base]++;
        }

        // compare current counts --> increase matches
        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++;
            }
        }
        
        // sliding window
        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            // if any time matches = 26 --> true
            if (matches === 26) return true;

            // add new right char to window -> update count -> compare -> update matches
            const nextChar = s2.charCodeAt(right) - base;
            s2Count[nextChar]++;

            if (s2Count[nextChar] === s1Count[nextChar]) {
                matches++;
            } else if (s2Count[nextChar] === s1Count[nextChar] + 1) {
                matches--;
            }

            // remove left char from window -> update count -> compare -> update matches
            const prevChar = s2.charCodeAt(left) - base;
            s2Count[prevChar]--;

            if (s2Count[prevChar] === s1Count[prevChar]) {
                matches++;
            } else if (s2Count[prevChar] === s1Count[prevChar] - 1) {
                matches--;
            }

            // slide window
            left++;
        }

        return matches === 26;
    }
}
