class CanvasNode {
  x = 0;
  y = 0;

  move(newX: number, newY: number) {
    this.updatePosition(newX, newY);
  }

  updatePosition(newX: number, newY: number) {
    this.x = newX;
    this.y = newY;
  }
}
