class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let index = s.length - 1;
        let length = 0;

        while (s[index] === " ") {
            index--;
        }
        
        while (s[index] && s[index] !== " ") {
            length++;
            index--;
        }

        return length;
    }
}
