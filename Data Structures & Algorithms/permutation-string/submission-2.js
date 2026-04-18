class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        //first i can find the number of alphabets present in s1
        //then slide the window in s2 for the length of s1 and compare the 
        //count of alphabets for window and s1.

        //equals return true

        let s1Count = new Array(26).fill(0)
        let s2Count = new Array(26).fill(0)

        for(let i=0;i<s1.length;i++){
            s1Count[s1.charCodeAt(i)-97]++
            s2Count[s2.charCodeAt(i)-97]++
        }

        function isEqual(a,b){
            for(let i=0;i<a.length;i++){
                if(a[i]!== b[i]) return false
            }
            return true
        }

        //we have found for the 1st window, we need to slide the window and
        //find within the upcoming substrings

        for(let i=0;i<=s2.length-s1.length;i++){
            if(isEqual(s1Count, s2Count)) return true

            //slide the window of s2

            if(i+s1.length<s2.length){
                s2Count[s2.charCodeAt(i)-97]--
                s2Count[s2.charCodeAt(i+s1.length)-97]++
            }
        }
        return false

    }
}
