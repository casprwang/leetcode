const plusOne = head => {
  head = reverse(head)
  head = plus(head)
  head = reverse(head)

  return head
}

const reverse = head => {
  let pre = null

  while (head) {
    let temp = head.next
    head.next = pre
    pre = head
    head = temp
  }

  return pre
}

const plus = head => {
  head.val += 1
  let res = head
  while (head.next) {
    if (head.val === 10) {
      head.val = 0
      head.next.val += 1
    } else {
      break
    }
    head = head.next
  }

  if (head.val === 10) {
    head.val = 0
    head.next = new ListNode(1)
  }

  return res
}
