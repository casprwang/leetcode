class Solution:
    def findTarget(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: bool
        traverse preorder
        """
        nums = []

        def traverse(root):
            nonlocal nums
            if not root:
                return

            traverse(root.left)
            nums.append(root.val)
            traverse(root.right)

        traverse(root)

        l = 0
        r = len(nums) - 1

        while l < r:
            sum = nums[l] + nums[r]

            if sum > k:
                r -= 1
            elif sum < k:
                l += 1
            else:
                return True

        return False
