import {node, rotateLeft, rotateRight} from '../src/SplayTree';
import {assert} from 'chai'

describe('SplayTree', function() {
  describe('rotateLeft', function() {
    it('should A->B should become A<-B', function() {
      var nodeA = node('A');
      var nodeB = node('B', nodeA);
      nodeA.right = nodeB;
      var root = rotateLeft(nodeA);
      assert.deepEqual(root, nodeB, 'root value should be B');
      assert.deepEqual(root.left, nodeA, 'left should be A');
    })

    it('B.left should become A.right', function() {
      var nodeA = node('A');
      var nodeB = node('B', nodeA);
      var nodeC = node('C', nodeB);
      nodeA.right = nodeB;
      nodeB.left = nodeC;
      var root = rotateLeft(nodeA);
      assert.deepEqual(root.left.right, nodeC, 'should be C');
    })

    it('should B<-A should become B->A', function() {
      var nodeA = node('A');
      var nodeB = node('B', nodeA);
      nodeA.left = nodeB;
      var root = rotateRight(nodeA);
      assert.deepEqual(root, nodeB, 'root value should be B');
      assert.deepEqual(root.right, nodeA, 'left should be A');
    })

    it('B.right should become A.left', function() {
      var nodeA = node('A');
      var nodeB = node('B', nodeA);
      var nodeC = node('C', nodeB);
      nodeA.left = nodeB;
      nodeB.right = nodeC;
      var root = rotateRight(nodeA);
      assert.deepEqual(root.right.left, nodeC, 'should be C');
    })


  });
});