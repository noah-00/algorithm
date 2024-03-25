/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function DFS_inOder(root: TreeNode | null): number[] {
  const data: number[] = [];
  function traverse(node: TreeNode | null) {
    if (node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
  }
  traverse(root);
  return data;
}
function countNodes(root: TreeNode | null): number {
  return DFS_inOder(root).length;
}
// @lc code=end
