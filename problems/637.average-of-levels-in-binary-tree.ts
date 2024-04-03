/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
  if (!root) return [];
  const resAverages = new Array<number>();
  let queue = new Array<TreeNode>();
  queue.push(root);

  while (queue.length) {
    const next = [];
    let sum: number = 0;
    for (const node of queue) {
      sum += node.val;
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }

    const avg = sum / queue.length;
    resAverages.push(avg);

    queue = next;
  }
  return resAverages;
}
// @lc code=end
