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
// const reverseList = head => {
//   let pre = null

//   while(head) {
//     let temp = head.next
//     head.next = pre
//     pre = head
//     head = temp
//   }

//   return pre
// }

var reverseList = function (head) {
  if (!head) return null

  let pre = null

  while (head) {
    let temp = head.next
    head.next = pre
    pre = head
    head = temp
  }

  return pre
}
