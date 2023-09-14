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
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head
    }

    //using fast and slow pointers to iterate
    let slow = head
    let fast = head.next

    while (fast !== null) {
        if (slow.val !== fast.val) {
            slow.next = fast
            slow = slow.next
        }

        fast = fast.next
        
        if (fast && slow.val === fast.val) {
            fast = fast.next
        }
    }

    slow.next = null

    return head
}


//time complexity: O(n)
//space complexity: O(1)