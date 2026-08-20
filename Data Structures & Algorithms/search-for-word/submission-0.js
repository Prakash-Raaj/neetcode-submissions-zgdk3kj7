class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let rows = board.length;
        let columns = board[0].length;

        function dfs(r, c, i) {
            if (i === word.length) {
                return true;
            }
            if (r < 0 || c < 0 || r >= rows || c >= columns || board[r][c] !== word[i]) {
                return false;
            }

            let temp = board[r][c];
            board[r][c] = "#";

            let res =
                dfs(r - 1, c, i + 1) ||
                dfs(r + 1, c, i + 1) ||
                dfs(r, c - 1, i + 1) ||
                dfs(r, c + 1, i + 1);
            board[r][c] = temp;

            return res;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (dfs(i, j, 0)) {
                    return true;
                }
            }
        }
        return false;
    }
}
