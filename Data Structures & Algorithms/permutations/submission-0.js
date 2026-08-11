class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = []

        let sub = []
        function backtrack(){
            if(sub.length === nums.length){
                res.push([...sub])
                return
            }
            // if(i>=nums.length){
            //     return
            // }

            for(let i=0;i<nums.length; i++){
                if(sub.includes(nums[i])) continue


                sub.push(nums[i])
                backtrack()
                sub.pop()
            }
        }

        backtrack()
        return res
    }
}
