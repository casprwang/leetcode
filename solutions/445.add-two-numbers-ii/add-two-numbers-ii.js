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
var addTwoNumbers = function(l1, l2) {
  // [7,2,4]  + [5,6,7]
  let arr1 = new Array()
  let arr2 = new Array()

  while (l1) {
    arr1.push(l1.val)
    l1 = l1.next
  }

  while (l2) {
    arr2.push(l2.val)
    l2 = l2.next
  }

  let p1 = arr1.length - 1
  let p2 = arr2.length - 1

  let carrier = 0
  let sum


  let head
  let node

  while (arr1[p1] !== undefined || arr2[p2] !== undefined) {
    let item1 = arr1[p1] || 0
    let item2 = arr2[p2] || 0

    sum = item1 + item2 + carrier

    if (sum > 9) {
      carrier = 1
      sum = sum % 10
    } else {
      carrier = 0
    }

    if (!node) {
      node = new ListNode(sum)
      head = node
    } else {
      node.next = new ListNode(sum)
      node = node.next
    }

    p1--
    p2--
  }

  if (carrier) {
    node.next = new ListNode(1)
  }

  return reverse(head)
}

//         node   ->  node   ->  node
// pre

function reverse(node) {
  let pre = null

  while (node) {
    let temp = node.next
    node.next = pre
    pre = node
    node = temp
  }

  return pre
}
