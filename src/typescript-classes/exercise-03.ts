class CanvasNode {
  x: number;
  y: number;

  constructor(position?: { x?: number; y?: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
