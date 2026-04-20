class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sFreq = new Array(26).fill(0)
        let tFreq = new Array(26).fill(0)
        if(s.length !==t.length) return false
        for(let i=0;i<s.length;i++){
            sFreq[s.charCodeAt(i)-97]++
            tFreq[t.charCodeAt(i)-97]++
        }

        for(let i=0;i<sFreq.length;i++){
            if(sFreq[i]!==tFreq[i]) return false
        }
        return true
    }
}
