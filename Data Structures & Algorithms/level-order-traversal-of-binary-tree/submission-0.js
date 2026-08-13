/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        let q = [root]
        let res = []
        let val;
        while(q.length>0){
            let qLen = q.length
            let arr = []
            for(let i=0;i<qLen;i++){
                let node = q.shift()
                if(node){
                    val = node.val
                    arr.push(val)
                }

                if(node.left) q.push(node.left)
                if(node.right) q.push(node.right)
            }
            res.push(arr)
        }
        return res
    }
}
