class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = []
        let sub = []

        let sorted = candidates.sort((a,b)=>a-b)
        function backtrack(i, sum){
           
            if(sum=== target){
                res.push([...sub])
                return
            }
             if(i>=sorted.length || sum>target){
                return
            }

            sub.push(sorted[i])
            backtrack(i+1, sum+sorted[i])

            sub.pop()
            while(i+1<sorted.length && sorted[i] === sorted[i+1]){
                i+=1
            }
            backtrack(i+1, sum)
        }
        backtrack(0, 0)
        return res
    }
}
