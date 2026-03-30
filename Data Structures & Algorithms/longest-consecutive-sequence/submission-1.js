class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedNums = nums.toSorted((a, b) => a - b);
        let currentStreak = 0;
        let longestStreak = 0;
        let lastNum;

        for (const num of sortedNums) {
            if (typeof lastNum === 'undefined') {
                lastNum = num;
                currentStreak = 1;
                longestStreak = 1;
                continue;
            }

            if (num === lastNum) {
              continue;
            }
    
            if (num === lastNum + 1) {
                currentStreak++;
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
            } else {
                currentStreak = 1;
            }

            lastNum = num;
        }

        return longestStreak;
    }
}
