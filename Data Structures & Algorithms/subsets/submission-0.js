class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        
        let res = []

        let subset = []

        function backtrack(i){
            if(i>=nums.length){
                res.push([...subset])
                return
            }

            //first include 
            subset.push(nums[i])
            backtrack(i+1)

            //then remove that
            subset.pop()
            backtrack(i+1)
        }

        backtrack(0)
        return res
    }
}
