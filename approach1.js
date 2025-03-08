//Recursion - O(n) time and O(n) space
//* Set the middle element of the array as root
//Recursively do the same for the left & right half
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

  function sortedArrayToBSTRecur(arr, start, end) {
    if (start > end) return null;

    //Finding middle element
    let mid = start + Math.floor((end - start) / 2);

    //Create rood node
    let root = new Node(arr[mid]);

    //Create left Subtree
    root.left = sortedArrayToBSTRecur(arr, start, mid - 1);

    //Create right Subtree
    root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

    return root;
  }

  function sortedArrayToBST(arr) {
    return sortedArrayToBSTRecur(arr, 0, arr.length - 1);
  }

  function preOrder(root) {
    if (root === null) return;
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
  }