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
     * @return {ListNode}
     */
    reverseList(head) {
        let stack = []
        let current = head

        while(current){
            stack.push(current.val)
            current = current.next
        }
        if(stack.length===0) return head
        const newNode = new ListNode(stack[stack.length-1])
        head = newNode
        stack.pop()
        let curr = head
        for(let i=stack.length-1;i>=0;i--){
            const node = new ListNode(stack[i])
            curr.next = node
            curr = curr.next
            // stack.pop()
        }
        return head

    }
}
