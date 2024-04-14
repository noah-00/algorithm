/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (root) helper(root, "", result);
  return result;
}

function helper(node: TreeNode, path: string, result: string[]): void {
  if (!node.left && !node.right) {
    result.push(path + node.val);
    return;
  }
  const currentPath = path + node.val + "->";
  if (node.left) helper(node.left, currentPath, result);
  if (node.right) helper(node.right, currentPath, result);
}
// @lc code=end
