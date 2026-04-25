class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length-1
        let maxArea = 0

        while(left<right){
            let currArea = Math.min(heights[left], heights[right]) * (right-left)

            if(heights[left]<=heights[right]){
                left++
            }else{
                right--
            }

            maxArea = Math.max(currArea, maxArea)
        }
        return maxArea 
    }
}
