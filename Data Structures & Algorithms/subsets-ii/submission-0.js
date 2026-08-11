class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = []
        let subset = []
        let sorted = nums.sort()
        // let visited = new Array(nums.length).fill(false)

        function backtrack(i){
            if(i>=nums.length){
                res.push([...subset])
                return
            }

            subset.push(sorted[i])
            backtrack(i+1)

            while(i+1<nums.length && sorted[i]=== sorted[i+1]){
                i+=1
            }
            subset.pop()
            backtrack(i+1)
        }
        backtrack(0)
        return res
    }
}
