class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!isValidChar(s, left)) {
                left++;
                continue;
            }
            if (!isValidChar(s, right)) {
                right--;
                continue;
            }

            if(s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}

function isValidChar(s, i) {
    const a = 'a'.charCodeAt(0);
    const z = 'z'.charCodeAt(0);
    const A = 'A'.charCodeAt(0);
    const Z = 'Z'.charCodeAt(0);
    const zero = '0'.charCodeAt(0);
    const nine = '9'.charCodeAt(0);

    const code = s.charCodeAt(i);

    return (
        (code >= a && code <= z) ||
        (code >= A && code <= Z) ||
        (code >= zero && code <= nine)
    );
}

