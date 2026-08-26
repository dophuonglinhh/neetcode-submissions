class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const n = arr.length;
        const res = new Array(n).fill(0);
        let largest = arr[n - 1];
        res[n - 1] = -1;
        res[n - 2] = largest;

        for (let i = n - 3; i >= 0; i--) {
            largest = Math.max(largest, arr[i + 1]);
            res[i] = largest;
        }
        return res;
    }
}
