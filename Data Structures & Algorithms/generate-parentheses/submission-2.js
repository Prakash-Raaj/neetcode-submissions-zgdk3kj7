class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = []

        function backtrack(openCount, closeCount, pathString){
            if(openCount === n && closeCount === n){
                res.push(pathString)
                return
            }

            if(openCount<n){
                backtrack(openCount+1, closeCount, pathString+"(")
            }

            if(closeCount < openCount){
                backtrack(openCount, closeCount+1, pathString+")")
            }
        }
        backtrack(0, 0, "")
        return res
    }
}
