class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        let sub = [];
        function backtrack(i, sum) {
            if (i >= nums.length || sum > target) {
                return;
            }

            if (sum === target) {
                res.push([...sub]);
                return;
            }

            //first we include i
            sub.push(nums[i]);
            backtrack(i, sum + nums[i]);

            //choose not to include i
            sub.pop();
            backtrack(i + 1, sum);
        }
        backtrack(0, 0);
        return res;
    }
}
