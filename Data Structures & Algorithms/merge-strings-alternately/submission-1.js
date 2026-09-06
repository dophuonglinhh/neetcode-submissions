class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        // let res = "";
        // let l1 = 0;
        // let l2 = 0;

        // while (l1 < word1.length && l2 < word2.length) {
        //     res += word1[l1] + word2[l2];
        //     l1++;
        //     l2++;
        // }

        // if (l1 < word1.length) {
        //     res += word1.slice(l1);
        // } else {
        //     res += word2.slice(l2);
        // }

        // return res;

        let res = "";
        let maxLength = word1.length > word2.length ? word1.length : word2.length;

        for (let i = 0; i < maxLength; i++) {
            if (word1[i])   res += word1[i];
            if (word2[i])   res += word2[i];
        }

        return res;
    }
}
