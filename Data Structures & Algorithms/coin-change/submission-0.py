class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount<1:
            return 0
        
        # [1, 2, 5] o/p = 19

        # [0, 1, 2, 3]

        dp = [amount+1] * (amount+1)
        dp[0] = 0

        for i in range(1, amount+1):
            for c in coins:
                if i-c>=0:
                    dp[i] = min(dp[i], 1+dp[i-c])
        return dp[-1] if dp[-1] != amount+1 else -1

