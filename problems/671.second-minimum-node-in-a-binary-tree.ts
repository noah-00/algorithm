/*
 * @lc app=leetcode id=671 lang=typescript
 *
 * [671] Second Minimum Node In a Binary Tree
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

function findSecondMinimumValue(root: TreeNode | null): number {
  const values = new Set<number>();
  const dfs = (node: TreeNode | null = root): void => {
    if (!node) return; // we're at end of tree branch
    values.add(node.val); // add value to set
    dfs(node.left); // go left
    dfs(node.right); // go right
  };
  dfs();
  return values.size === 1 ? -1 : Array.from(values).sort((a, b) => a - b)[1];
}
// @lc code=end
