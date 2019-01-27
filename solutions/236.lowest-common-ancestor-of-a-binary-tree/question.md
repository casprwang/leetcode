Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: &ldquo;The lowest common ancestor is defined between two nodes p&nbsp;and q&nbsp;as the lowest node in T that has both p&nbsp;and q&nbsp;as descendants (where we allow a node to be a descendant of itself).&rdquo;

Given the following binary tree:&nbsp; root =&nbsp;[3,5,1,6,2,0,8,null,null,7,4]

&nbsp;

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.


Example 2:


Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.


&nbsp;

Note:


All of the nodes&#39; values will be unique.
p and q are different and both values will&nbsp;exist in the binary tree.

