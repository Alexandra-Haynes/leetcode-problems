/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    //using the slow and fast pointers technique:
    //if pointers ever meet on a Node -> linked list has a cycle
    
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
        
        //check if they ever meet
        
        if(slow==fast){
            return true
        }
        
    }
    
    return false
};