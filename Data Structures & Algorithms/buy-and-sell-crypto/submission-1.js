class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let left = 0
        
        for(let right = 0;right<prices.length;right++){
            let profit = prices[right]-prices[left]

            if(maxProfit<profit) maxProfit = profit

            if(prices[right]<prices[left]) left = right
        }
        return maxProfit

    }
}
