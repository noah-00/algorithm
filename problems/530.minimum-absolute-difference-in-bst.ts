/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
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

function getMinimumDifference(root: TreeNode | null): number {
  const l = [];
  inorder(root, l);
  return Math.min(
    ...l.map((e, i) => {
      if (i === 0) return Infinity;
      else return e - l[i - 1];
    })
  );
}

function inorder(r: TreeNode, l: number[]): void {
  if (r === null) return;
  inorder(r.left, l);
  l.push(r.val);
  inorder(r.right, l);
}
// @lc code=end
