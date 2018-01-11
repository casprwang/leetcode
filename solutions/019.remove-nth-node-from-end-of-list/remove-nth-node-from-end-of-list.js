/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  // get length

  let len = 0

  let ref = head
  while (ref) {
    len++
    ref = ref.next
  }

  let ref2 = head

  while (head) {
    if( n===len) return head.next
    if (n === len-1) {
      head.next = head.next.next
      break
    } else {
      head = head.next
      len--
    }
  }

  return ref2
};