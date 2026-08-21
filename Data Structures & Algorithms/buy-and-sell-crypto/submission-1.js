class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let maxProfit = 0;

        // for (let i = 0; i < prices.length - 1; i++) {
        //     let buy = i;
        //     let sell = i + 1;

        //     while (sell < prices.length) {
        //         if (prices[sell] > prices[buy]) {
        //             let profit = prices[sell] - prices[buy];
        //             maxProfit = Math.max(maxProfit, profit);
        //         }
        //         sell++;
        //     }
        // }
        // return maxProfit;

        let profit = 0;
        let buy = prices[0];

        for (let i = 1; i < prices.length; i++) {
            buy = Math.min(buy, prices[i]);
            profit = Math.max(profit, prices[i] - buy);
        }

        return profit;
    }
}
