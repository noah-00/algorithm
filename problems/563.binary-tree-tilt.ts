/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
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

function findTilt(root) {
  if (!root) return 0;
  return dfs(root).ns;
}
function dfs(node) {
  /* s-> sum
    ns-> node sum
     */
  if (node.left == null && node.right == null) {
    const val = node.val;
    node.val = 0;
    return { s: val, ns: 0 };
  }
  const l = node.left ? dfs(node.left) : { s: 0, ns: 0 };
  const r = node.right ? dfs(node.right) : { s: 0, ns: 0 };
  const sum = l.s + r.s + node.val;
  node.val = Math.abs(l.s - r.s);
  return { s: sum, ns: node.val + l.ns + r.ns };
}
// @lc code=end
