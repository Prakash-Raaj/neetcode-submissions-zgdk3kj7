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
     * @return {void}
     */
    reorderList(head) {
        //find the middle element
        let slow = head
        let fast = head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        
        let secondHalf = slow.next
        slow.next = null
        //take out the second half, reverse it
        let prev = null
        let curr = secondHalf

        while(curr){
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        //prev is the head of the reversed half
        //insert the reversed half into the first half in alternate positions
        curr = head
        while(curr && prev){
            let temp = curr.next
            let prevTemp = prev.next

            curr.next = prev
            prev.next = temp
            curr = temp
            prev = prevTemp
        }

        return head

    }
}
