/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
  let dummy = new ListNode(0)
    dummy.next = head
    
    let fast = dummy
    let slow = dummy

    // move the fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }

    // move both pointers until fast reaches the end
    while (fast) {
        fast = fast.next
        slow = slow.next
    } //now the distance between slow and fast =n

    // remove the nth node from the end
    slow.next = slow.next.next

    return dummy.next //return the head
};

/**

Time Complexity: O(n), we traverse the list once

Space Complexity: O(1), we're using a constant amount of space regardless of the size of the linked list

**/