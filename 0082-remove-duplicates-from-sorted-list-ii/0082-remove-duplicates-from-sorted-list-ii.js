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
      if (!head || !head.next) return head // no nodes or just one node

    
    //using slow and fast pointers technique:
    
    let dummy = new ListNode(0)
    let prev = dummy

    while (head) {
        let current = head

        // check if the current node has a duplicate
        if (current.next && current.val === current.next.val) {
            // move the current pointer until we get to a different value
            while (current.next && current.val === current.next.val) {
                current = current.next
            }
            // move the head pointer to the next distinct value
            head = current.next
        } else {
            prev.next = current
            prev = prev.next
            head = head.next
        }
    }

    // remove any remaining nodes from the previous list
    prev.next = null
    
    return dummy.next
};

//time complexity: O(n), itering through the linked list once
//space complexity: O(1), only a fixed number of pointers 