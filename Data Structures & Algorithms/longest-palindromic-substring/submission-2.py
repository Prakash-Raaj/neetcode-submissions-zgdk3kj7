class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n <= 1:
            return s

        dp = [[False] * n for _ in range(n)]
        resIdx = 0
        resLen = 1

        for i in range(n-1, -1, -1):

            for j in range(i, n):
                
                if s[i] == s[j]:

                    if j-i<=2 or dp[i+1][j-1]:

                        dp[i][j] = True
                    
                        current_len = j-i+1

                        if current_len > resLen:
                            resLen = current_len
                            resIdx = i
        return s[resIdx:resIdx+resLen]


            