/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  // iterative
// const deleteDuplicates = head => {
//   if (!head) return null
//   let ref = head

//   while (head.next) {
//     if (head.val === head.next.val) {
//       head.next = head.next.next
//     } else {
//       head = head.next
//     }
//   }

//   return ref
// }


// recursive
const deleteDuplicates = head => {
  if (!head || !head.next) return head

  head.next = deleteDuplicates(head.next)

  if (head.val === head.next.val) return head.next
  else return head
}