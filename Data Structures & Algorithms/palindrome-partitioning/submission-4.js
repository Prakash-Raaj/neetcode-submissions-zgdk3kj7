class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = []
        let path = []

        function isPali(l, r, substring){
            while(l<r){
                if(substring[l]!==substring[r])
                    return false
                l++
                r--    
            }
            return true
        }

        function backtrack(i){
            if(i ===  s.length){
                res.push([...path])
                return
            }

            for(let j=i;j<s.length;j++){
                let substring = s.slice(i, j+1)
                if(isPali(i, j, s)){
                    path.push(substring)
                    backtrack(j+1)
                    path.pop()
                }
            }
        }
        backtrack(0)
        return res
    }
}
