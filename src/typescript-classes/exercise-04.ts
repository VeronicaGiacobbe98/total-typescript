class CanvasNode {
  x: number;
  y: number;

  constructor(opts?: { x: number; y: number }) {
    this.x = opts?.x || 0;
    this.y = opts?.y || 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
