class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let sortednums = nums.sort((a,b)=>a-b)

        let res = []
        for(let i=0;i<sortednums.length;i++){
            if(i>0 && nums[i-1]===nums[i]) continue

            let left = i+1
            let right = sortednums.length-1
            while(left<right){
                let sum = sortednums[left]+sortednums[right]+sortednums[i]

                if(sum>0){
                    right--
                }else if(sum<0){
                    left++
                }else{
                    res.push([sortednums[i], sortednums[left], sortednums[right]])
                    left++
                    right--
                    while(left<right && sortednums[left-1]===sortednums[left]) left++
                    while(left<right && sortednums[right]===sortednums[right+1]) right--
                }
            }
        }
        return res
    }
}
