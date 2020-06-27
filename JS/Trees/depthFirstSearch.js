class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // PRE ORDER DEPTH FIRST SEARCH //
  /* Time: O(v + e) Space: O(v) where V is the number of verticies of the
		 input graph and e is the number of edges of the input graph.
		^^^^ May need to read up on this further. Not too strong in graphs yet.
	*/

  depthFirstSearch(array) {
    /* We begin by pushing the nodes value into our array,
			 we do this at the start of each traversal.
		*/
    array.push(this.name);
    // Because we may have more than 2 children, we loop over child array
    for (const child of this.children) {
      // For each child we reach, we call the function. Passing in our array
      // as we go.
      child.depthFirstSearch(array);
    }

    // Finally we return our array of values.
    return array;
  }
}
