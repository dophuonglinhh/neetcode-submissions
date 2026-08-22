class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }

        const stack = [];

        for (let c of s) {
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c);
                continue;
            } else {
                if (pairs[c] !== stack.pop()) {
                    return false;
                }
            }

            
        }
        return stack.length === 0;
    }
}
