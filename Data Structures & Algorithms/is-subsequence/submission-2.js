class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if (s.length > t.length)    return false;
        if (s.length === 0) return true;
        let sIndex = 0;
        
        for (let char of t) {
            if (char === s[sIndex]) {
                if (sIndex === s.length - 1) {
                    return true;
                }
                sIndex++;
            }
        }

        return false;
    }
}
