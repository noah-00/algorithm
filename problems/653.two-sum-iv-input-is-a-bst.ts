/*
 * @lc app=leetcode id=653 lang=typescript
 *
 * [653] Two Sum IV - Input is a BST
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

function findTarget(root: TreeNode | null, k: number): boolean {
  // Trivial and guard
  if (!root || k == undefined) return false;

  // store visited numbers
  const digitMap = new Map();

  // DFS
  const traverse = (node: TreeNode) => {
    if (!node) return false;

    const curVal = node.val;
    const reqd = k - curVal;

    if (digitMap.has(reqd)) {
      return true;
    } else {
      digitMap.set(curVal, 1);

      return traverse(node.left) || traverse(node.right);
    }
  };

  return traverse(root);
}
// @lc code=end
