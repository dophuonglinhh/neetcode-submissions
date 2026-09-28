class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const ans = [];

        for (let i = 0; i < numRows; i++) {
            ans[i] = []
            ans[i][0] = 1;
            ans[i][i] = 1;

            for (let j = 1; j < i; j++) {
                if (i > 1) {
                    ans[i][j] = ans[i-1][j-1] + ans[i-1][j];
                }
            }
        }
        
        return ans;
    }
}
