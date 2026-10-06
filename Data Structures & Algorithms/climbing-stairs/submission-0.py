class Solution:
    def climbStairs(self, n: int) -> int:
        dp = [-1] * (n+1)
        print(dp)
        
        def helper(i):
            if i<=2:
                return i
            if dp[i]!=-1:
                return dp[i]
            dp[i] = helper(i-2) + helper(i-1)
            return dp[i]
        
        return helper(n)
