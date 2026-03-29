class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = s.split('').toSorted().join('');
        const tSorted = t.split('').toSorted().join('');

        return sSorted === tSorted;
    }
}
