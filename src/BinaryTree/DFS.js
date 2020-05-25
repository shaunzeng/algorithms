export function preorder(node) {
    if (!node) return;
    console.log(node.data, ' preoder');
    this.preorder(node.left);
    this.preorder(node.right);
}

export function inorder(node) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.data, ' inorder');
    this.inorder(node.right);
}

export function postorder(node) {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.data, ' postorder');
}