/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = (head, val) => {
  if(!head) return null
  let temp = head
  while (temp) {
    while (temp.next && temp.next.val === val) {
      temp.next = temp.next.next
    }
    temp = temp.next
  }

  return head.val === val ? head.next: head
}
