class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groupedStrs = new Map();

        for (const str of strs) {

            const key = str.split('').toSorted().join('');

            if (!groupedStrs.has(key)) {
                groupedStrs.set(key, [str]);
            } else {
                groupedStrs.set(key, [str, ...groupedStrs.get(key)]);
            }
        }

        return Array.from(groupedStrs.values());
        
    }
}
