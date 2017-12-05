// const addTwoNumbers = (l1, l2) => {
//   let add = 0
//   let ans // pointing to the head
//   let cur

//   while (l1 || l2) {
//     let a = l1 ? l1.val : 0
//     let b = l2 ? l2.val : 0

//     let sum = a + b + add

//     add = ~~(sum / 10)

//     var node = new ListNode(sum % 10)

//     if (!ans) {
//       ans = node
//       cur = node
//     } else {
//       cur.next = node
//       cur = node
//     }

//     if (l1) l1 = l1.next
//     if (l2) l2 = l2.next
//   }

//   if (add) {
//     var node = new ListNode(add)
//     cur.next = node
//   }

//   return ans
// }

const addTwoNumbers = (l1, l2) => {
  let carrier = 0
  let res
  let curNode

  while (l1 || l2) {
    let a = l1 ? l1.val : 0
    let b = l2 ? l2.val : 0

    let sum = a + b + carrier

    carrier = ~~(sum / 10)
    let curVal = sum % 10

    if(!res) {
      res = new ListNode(curVal) // res pointer
      curNode = res      
    } else {
      curNode.next = new ListNode(curVal)
      curNode = curNode.next
    }

    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  if(carrier !== 0) {
    curNode.next = new ListNode(carrier)
  }

  return res
}
