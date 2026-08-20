class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        if (numbers.length === 2)   return [1,2];

        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            if (numbers[left] + numbers[right] === target) {
                return [left + 1, right + 1];
            }

            if (numbers[left] + numbers[right] < target) {
                left++;
            } else {
                right--;
            }
        }

    }
}
