class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0
        let maxFreq = 0
        let left = 0
        let map = new Map()
        for(let right=0;right<s.length;right++){
            map.set(s[right], (map.get(s[right])||0)+1)

            maxFreq = Math.max(maxFreq, map.get(s[right]))

            while((right-left+1)-maxFreq>k){
                map.set(s[left], map.get(s[left])-1)
                left++
            }
            res = Math.max(right-left+1, res)
        }
        return res
    }
}
