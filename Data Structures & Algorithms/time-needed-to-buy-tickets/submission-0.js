class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
        let time = 0;
        let index = 0;

        while (tickets[k] > 0) {
            if (tickets[index] > 0) {
                tickets[index]--;
                time++;
            } 

            index = index === tickets.length - 1 ? 0 : index + 1;
        }

        return time;
    }
}
