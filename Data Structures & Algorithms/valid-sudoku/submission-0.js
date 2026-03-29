class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const hLine = board[i];

            if (!this.checkSegment(hLine)) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            const vLine = board.reduce((acc, hLine) => {
                acc.push(hLine[i]);
                return acc;
            }, []);

            if (!this.checkSegment(vLine)) {
                return false;
            }
        }

        for (let i = 0; i < 9; i++) {
            const block = this.getBlockAsArray(board, i);

            if (!this.checkSegment(block)) {
                return false;
            }
        }

        return true;
    }

    getBlockAsArray(board, blockN) {
        const arr = [];

        let iStep = blockN < 3 ? 0 : blockN < 6 ? 3 : 6;
        let jStep = [0, 2, 5].includes(blockN) ? 0 : [1, 3, 6].includes(blockN) ? 3 : 6;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                arr.push(board[i + iStep][j + jStep]);
            }
        }

        return arr;
    }

    checkSegment(segment) {
        const set = new Set();

        for (const num of segment) {
            if (num !== '.' && set.has(num)) {
                return false;
            }
            set.add(num);
        }

        return true;
    }
}
