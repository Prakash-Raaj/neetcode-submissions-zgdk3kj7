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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!root) return false;
        if(!subRoot) return true;
        if (sameTree(root, subRoot)) {
            return sameTree(root, subRoot);
        }

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)

        function sameTree(p, q) {
            if (p === null && q === null) return true;

            if (p === null || q === null || p.val !== q.val) return false;

            return sameTree(p.left, q.left) && sameTree(p.right, q.right);
        }
    }
}
