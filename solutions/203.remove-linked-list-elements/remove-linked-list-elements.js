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

// // recursive
// const removeElements = (head, val) => {
//   if (head === null) return null

//   head.next = removeElements(head.next, val)

//   return head.val === val ? head.next : head
// }


// iterative
const removeElements = (head, val) => {
  let ref = new ListNode(1)
  ref.next = head

  let res = ref

  while (ref.next) {
    if (ref.next.val === val) {
      ref.next = ref.next.next
    } else {
      ref = ref.next
    }
  }

  return res.next
}