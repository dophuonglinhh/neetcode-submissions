class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1)  return [[strs[0]]];

        const base = 'a'.charCodeAt(0);
        const map = new Map();

        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (let char of str) {
                count[char.charCodeAt(0) - base] += 1;
            }

            const key = count.join(".");
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(str);
        }

        return [...map.values()];
    }
}
