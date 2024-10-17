class CanvasNode {
  x = 0;
  y = 0;

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

function positionFromCanvasNode(node: CanvasNode) {
  return {
    x: node.x,
    y: node.y,
  };
}
console.log(positionFromCanvasNode);
