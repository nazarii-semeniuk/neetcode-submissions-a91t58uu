class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.toSorted((a, b) => a - b);
        const result = new Map();

        for (let n = 0; n < sortedNums.length; n++) {
            const number = sortedNums[n];

            let leftIndex = n + 1;
            let rightIndex = sortedNums.length - 1;


            while(leftIndex < rightIndex) {
                const targetSum = -number;
                const leftNum = sortedNums[leftIndex];
                const rightNum = sortedNums[rightIndex];

                const sum = leftNum + rightNum;

                if (targetSum > sum) {
                    leftIndex++
                } else if (targetSum < sum) {
                    rightIndex--;
                } else {
                    const array = [number, leftNum, rightNum].sort((a, b) => a - b);

                    result.set(array.join('-'), array);
                    
                    leftIndex++;
                    rightIndex--;
                } 
            }
        }

        return Array.from(result.values());
    }
}
