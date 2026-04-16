class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length-1
        let n = matrix[0].length-1
        
        let top = 0
        let bottom = m
        let row = -1

        while(top <= bottom){
            let mid = Math.floor((top+bottom)/2)
            if(matrix[mid][0]<=target && matrix[mid][n]>=target){
                row = mid
                break
            }
            if(matrix[mid][0]>target){
                bottom = mid-1
            }else{
                top = mid+1
            }
        }
        if(row===-1) return false
        let left = 0
        let right = n
        while(left <= right){
            let mid = Math.floor((left+right)/2)

            if(matrix[row][mid]===target){
                return true
            }else if(matrix[row][mid] < target){
                left = mid+1
            }else{
                right = mid-1
            }
        }
        return false
    }
}