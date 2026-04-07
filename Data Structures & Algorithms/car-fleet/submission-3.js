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
            let time = (target-p)/s
            // stack.push((target-p)/s)
            if(stack.length && stack[stack.length-1]>= time){
                continue
            }
            stack.push(time)
        }
        return stack.length
    }
}