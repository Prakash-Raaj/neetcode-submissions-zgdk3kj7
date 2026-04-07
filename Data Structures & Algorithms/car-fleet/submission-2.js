class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let carPositionWithSpeed = []
        for(let i=0;i<position.length;i++){
            carPositionWithSpeed[i] = [position[i], speed[i]]
        }

        carPositionWithSpeed.sort((a,b)=>b[0]-a[0])

        let stack=[]

        for(let [p,s] of carPositionWithSpeed){
            stack.push((target-p)/s)
            if(stack.length>=2 && stack[stack.length-1]<= stack[stack.length-2]){
                stack.pop()
            }
        }
        return stack.length
    }
}
