/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  if (!head) return true
  let arr = []

  while (head) {
    arr.push(head.val)
    head = head.next
  }

  return isPali(arr)
}

const isPali = arr => {
  return arr.join('') === arr.reverse().join('')
}

