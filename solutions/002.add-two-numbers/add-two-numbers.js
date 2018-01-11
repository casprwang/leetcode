/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  if (!l1 && !l2) return null

  let carrier = 0
  let res = ''

  while (l1 || l2) {
    let v1
    let v2

    if (l1) v1 = l1.val
    else v1 = 0

    if (l2) v2 = l2.val
    else v2 = 0

    let sum = v1 + v2 + carrier

    if (sum > 9) {
      carrier = 1
      sum = sum % 10
    } else {
      carrier = 0
    }

    res = sum + res

    if (l1) l1 = l1.next
    else l1 = null

    if (l2) l2 = l2.next
    else l2 = null
  }

  if (carrier) res = '1' + res

  let head = new ListNode(Number(res[res.length - 1]))

  let result = head

  let pos = res.length - 2

  while (pos > -1) {
    head.next = new ListNode(Number(res[pos]))

    head = head.next
    pos--
  }

  return result
}