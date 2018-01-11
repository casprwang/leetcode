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
// // recursive
// const swapPairs = head => {
//   if (!head) {
//     return null
//   }

//   if (head && !head.next) {
//     return head
//   }

//   head.next.next = swapPairs(head.next.next)

//   let middle = head.next
//   head.next = head.next.next
//   middle.next = head

//   return middle
// };

// iterative
const swapPairs = head => {
  let ref = new ListNode(1)
  ref.next = head
  let res = ref

  // head   next    next.next  next.next.next
  // 1     2

  // head   next.next   next  nexr.next.next

  while (ref) {
    if (!ref.next) {
      break
    }

    if (ref.next && !ref.next.next) {
      break
    }

    if (ref.next && ref.next.next) {
      let next = ref.next
      let right = ref.next.next.next
      ref.next = ref.next.next
      ref.next.next = next
      next.next = right

      ref = ref.next.next
    }
  }

  return res.next
};