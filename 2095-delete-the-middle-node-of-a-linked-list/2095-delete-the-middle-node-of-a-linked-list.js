/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    
    //using the fast and slow pointer technique
    
    if (!head || !head.next) return null //one or zero nodes
    
    let slow=head
    let fast=head
    let prev=null
    
    while(fast && fast.next){
        prev=slow
        slow=slow.next
        fast=fast.next.next
    }
    
     // remove the slow pointer (middle node):
    if (prev) {
        prev.next = slow.next
    }
    
    return head
}

//time complexity: O(n), we interate through the linked list once with the pointers
//space complexity: O(1), the space used by the slow, fast, and prev pointers is constant and does not grow with the size of the input linked list