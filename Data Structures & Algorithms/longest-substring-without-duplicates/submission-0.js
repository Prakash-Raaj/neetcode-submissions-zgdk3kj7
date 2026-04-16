class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let map = new Map()
        let res = 0

        for(let right=0; right<s.length;right++){
            if(map.has(s[right])){
                left = Math.max(map.get(s[right])+1, left)
            }
            map.set(s[right], right)
            res = Math.max(res, right-left+1)

        }
        return res

    }
}
