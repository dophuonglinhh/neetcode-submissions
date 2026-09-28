class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        // let num = 0;

        // for (let i = 0; i < details.length; i++) {
        //     const age = Number(details[i][11] + details[i][12]);
        //     if (age > 60) {
        //         num++;
        //     }
        // }

        // return num;

        return details.reduce((sum, detail) => sum + Number(detail.slice(11, 13) > 60), 0);
    }
}
