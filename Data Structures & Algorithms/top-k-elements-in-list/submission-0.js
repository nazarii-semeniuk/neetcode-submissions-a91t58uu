class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (const num of nums) {
            if (num in map) {
                map[num] += 1;
            } else {
                map[num] = 1
            }
        }

        return Object.entries(map).sort(([an, ank], [bn, bnk]) => bnk - ank).slice(0, k).map(i => i[0])
    }
}
