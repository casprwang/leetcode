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
// iterative
// const reverseList = head => {
//   let pre = null
//   let cur = head
//   let next = null

//   while(cur) {
//     next = cur.next

//     cur.next = pre

//     pre = cur
//     cur = next
//   }

//   return pre
// }


// const reverseList = (head) => {
//   if (head == null || head.next === null) {
//     return head
//   }

//   let pre = head.next
//   let next = reverseList(pre)

//   head.next = null

//   pre.next = head
//   return next
// }

// // findal recursion
// const reverseList = head => {
//   if (!head || !head.next) return head

//   let newHead = reverseList(head.next)

//   head.next.next = head
//   head.next = null

//   return newHead
// }

const reverseList = head => {
  let pre = null
  //  pre -> head ->  next
  //      <-      <-

  while (head) {
    let next = head.next
    head.next = pre
    pre = head
    head = next
  }

  return pre
}


