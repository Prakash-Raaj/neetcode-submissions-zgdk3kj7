/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        //done by fast and slow pointer
        //if both meet then there is a cycle

        let slow = head
        let fast = head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
            if(slow===fast){
                return true
            }
        }
        return false

    }
}
