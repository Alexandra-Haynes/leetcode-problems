/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    
    let length = 0
    let current = head

    // find the length of the linked list
    while (current) {
        length++
        current = current.next
    }

    // find the positions from the beginning
    
    let firstPosition = k
    let secondPosition = length - k + 1

    if (firstPosition === secondPosition) return head

    let firstPrev = null, 
        secondPrev = null, 
        firstNode = head, 
        secondNode = head

   
    for (let i = 1; i < firstPosition; i++) {
        firstPrev = firstNode
        firstNode = firstNode.next
    }

   
    for (let i = 1; i < secondPosition; i++) {
        secondPrev = secondNode
        secondNode = secondNode.next
    }

    // swap
   const temp = firstNode.val
    firstNode.val = secondNode.val
    secondNode.val = temp

    return head
}

//space complexity: O(1)
//time complexity: O(n)




