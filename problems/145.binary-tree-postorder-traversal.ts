/*
 * @lc app=leetcode id=145 lang=typescript
 *
 * [145] Binary Tree Postorder Traversal
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

function getValues(node: TreeNode, values: number[]): number[] {
  if (node === null) return values;

  getValues(node.left, values);
  getValues(node.right, values);
  values.push(node.val);

  return values;
}

function postorderTraversal(root: TreeNode | null): number[] {
  return getValues(root, []);
}
// @lc code=end

// root = [1,null,2,3]

// 1. return getValues(root, []) = getValues([1,null,2,3], [])

// 2. getValues(node.left, values) = getValues(null, [])
// → if (node === null) return values;

// 3. getValues(node.right, values) = getValues([2,3], [])
// → getValues(node.left, values) = getValues([3], [])
// → values.push(3); values = [3]

// 4. values.push(2); values = [3, 2]

// 5. values.push(1); values = [3, 2, 1]
