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
var middleNode = function(head) {
    
    //using the fast and slow pointers technique
    
    let slow = head
    let fast = head
    
    while(fast && fast.next){
        slow=slow.next
        fast=fast.next.next
    }
    
    return slow
};

//time complexity: O(n), n-number of Nodes
//space complexity: O(1)