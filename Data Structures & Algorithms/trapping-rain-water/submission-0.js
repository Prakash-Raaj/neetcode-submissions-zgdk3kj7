class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0
        let right = height.length-1
        let left_max = height[left]
        let right_max = height[right]
        let water = 0
        while(left<right){
            if(left_max<right_max){
                left++
                left_max = Math.max(left_max, height[left])
                water+=left_max-height[left]
            }else{
                right--
                right_max = Math.max(right_max, height[right])
                water+=right_max - height[right]
            }

        }
        return water

    }
}
