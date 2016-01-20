function node(val, parent, left, right) {
	return {
		val: val,
		parent: parent,
		left: left,
		right: right
	}
}

function rotateLeft(node) {
	if (!(node && node.right)) {
		return undefined;
	}
	var rightNode = node.right;
	node.right = rightNode.left;
	rightNode.left = node;
	if (node.right) {
		node.right.parent = node;
	}
	rightNode.parent = node.parent;
	if (node.parent && node.parent.left === node) {
		node.parent.left = rightNode;
	} else if (node.parent && node.parent.right === node) {
		node.parent.right = rightNode;
	}
	node.parent = rightNode;
	return rightNode;
}

function rotateRight(node) {
	if (!(node && node.left)) {
		return undefined;
	}
	var leftNode = node.left;
	node.left = leftNode.right;
	leftNode.right = node;
	if (node.left) {
		node.left.parent = node;
	}
	leftNode.parent = node.parent;
	if (node.parent && node.parent.left === node) {
		node.parent.left = leftNode;
	} else if (node.parent && node.parent.right === node) {
		node.parent.right = leftNode;
	}
	node.parent = leftNode;
	return leftNode;
}

// insert val into node
function insert(node, val) {
	// TODO: implement insert
}

module.exports = {
	node: node,
	rotateLeft: rotateLeft,
	rotateRight: rotateRight
}