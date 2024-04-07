/*
 * @lc app=leetcode id=783 lang=typescript
 *
 * [783] Minimum Distance Between BST Nodes
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function minDiffInBST(root: TreeNode | null): number {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prev = Number.MIN_SAFE_INTEGER;
  const traverse = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    traverse(node.left);
    minDiff = Math.min(minDiff, node.val - prev);
    prev = node.val;
    traverse(node.right);
  };
  traverse(root);
  return minDiff;
}
// @lc code=end
