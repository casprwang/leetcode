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
function hasCycle(head) {
  if(!head) return false
    
  let p1 = head
  let p2 = head

  while (p2.next !== null && p2.next.next !== null) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1.val === p2.val) return true
  }

  return false
}