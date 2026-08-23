class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = [];
        
        for (let i = 0; i < temperatures.length; i++) {
            const temp = temperatures[i];

            while (stack.length && temp > stack[stack.length - 1][0]) {
                const [t, index] = stack.pop();
                res[index] = i - index;
            }

            stack.push([temp, i]);
        }

        return res;
    }
}
