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
  let lenA = getLen(headA)
  let lenB = getLen(headB)

  while (lenA < lenB) {
    headB = headB.next
    lenB--
  }

  while (lenA > lenB) {
    headA = headA.next
    lenA--
  }

  while (headA && headB) {
    if (headA === headB) return headA

    headA = headA.next
    headB = headB.next
  }

  return null
}

const getLen = head => {
  let len = 0
  while (head) {
    len++
    head = head.next
  }

  return len
}
