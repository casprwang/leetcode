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
const mergeTwoLists = (l1, l2) => {
  let ans = []
  while (l1) {
    ans.push(new ListNode(l1.val))
    l1 = l1.next
  }
  while (l2) {
    ans.push(new ListNode(l2.val))
    l2 = l2.next
  }

  ans.sort((a, b) => a.val - b.val)

  if (!ans.length) return null

  for (var i = 0; i < ans.length - 1; i++)
    ans[i].next = ans[i + 1]

  return ans[0]
}
