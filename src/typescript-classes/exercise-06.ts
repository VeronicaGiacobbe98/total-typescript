export class CanvasNode1 {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  get position() {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  set position(newPosition: { x: number; y: number }) {
    if (
      typeof newPosition.x === "number" &&
      typeof newPosition.y === "number"
    ) {
      this.#x = newPosition.x;
      this.#y = newPosition.y;
    } else {
      throw new Error("Invalid position: x and y must be numbers");
    }
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}
