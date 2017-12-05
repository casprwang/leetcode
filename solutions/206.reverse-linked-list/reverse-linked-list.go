/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	var pre *ListNode

	for head != nil {
		// pre    head   head
		temp := head.Next
		head.Next = pre
		pre = head
		head = temp
	}

	return pre

}