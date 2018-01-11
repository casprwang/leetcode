/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let set = new Set()

  while (headA) {
    set.add(headA.val)
    headA = headA.next
  }

  while (headB) {
    if (set.has(headB.val)) return headB

    headB = headB.next
  }

  return null
}