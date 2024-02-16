/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
 */

type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

// @lc code=start

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
}
// @lc code=end
