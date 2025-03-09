class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
  prettyPrint() {
    prettyPrint(this.root);
  }
}

function buildTree(array) {
  
  const sortedUniqueArray = [...new Set(array)].sort((a, b) => a - b);

  
  if (sortedUniqueArray.length === 0) return null;

  
  const buildTreeRecursive = (arr, start, end) => {  // Use arr or array here
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);  // Use arr (or rename to array)

    root.left = buildTreeRecursive(arr, start, mid - 1);
    root.right = buildTreeRecursive(arr, mid + 1, end);

    return root;
  };

  
  return buildTreeRecursive(sortedUniqueArray, 0, sortedUniqueArray.length - 1);
}


const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);
console.log(tree);
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
tree.prettyPrint();