class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (const numIndex in nums) {
            const num = nums[+numIndex];

            const neededNum = target - num;

            const foundNumIndex = nums.findIndex((n, nIndex) => n === neededNum && +numIndex !== nIndex);

            if (foundNumIndex < 0) {
                continue;
            }

            return [+numIndex, foundNumIndex];
        }
    }
}
