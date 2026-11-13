class Solution:
    def numDecodings(self, s: str) -> int:
       n = len(s)
       dp = [0] * (n+1)

       dp[n] = 1 #no. of ways to decode string from i s[i(n):] so basically an epmty string

        # come from behind and all we need is dp[0] to decode s from s[0:] 0 till end
       for i in range(n-1, -1, -1):
            if s[i] == "0":
                dp[i] = 0
            else:
                dp[i] = dp[i+1]
            
            if i+1<n:
                if s[i] == "1" or (s[i] == "2" and s[i+1] in "0123456"):
                    dp[i]+=dp[i+2]
        
       return dp[0]

