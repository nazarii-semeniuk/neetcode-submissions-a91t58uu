class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sArray = s.toLowerCase().split('');

        let firstIndex = 0;
        let lastIndex = sArray.length - 1;

        while (firstIndex < sArray.length) {
            if (sArray[firstIndex] === sArray[lastIndex]) {
                firstIndex++;
                lastIndex--;
            } else {
                if (!/[a-zA-Z0-9]/.test(sArray[firstIndex])) {
                    firstIndex++;
                    continue;
                }
                if (!/[a-zA-Z0-9]/.test(sArray[lastIndex])) {
                    lastIndex--;
                    continue;
                }
                return false;
            }
        }

        return true;
    }
}
