type ViewMode = "hidden" | "visible" | "selected";

class Shape {
  protected x: number;
  protected y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  moveTo(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }

  getPosition(): { x: number; y: number } {
    return { x: this.x, y: this.y };
  }
}

export class CanvasNode extends Shape {
  viewMode: ViewMode = "visible";

  constructor(options?: { x: number; y: number; viewMode?: ViewMode }) {
    super(options?.x ?? 0, options?.y ?? 0);
    this.viewMode = options?.viewMode ?? "visible";
  }

  setViewMode(mode: ViewMode): void {
    this.viewMode = mode;
  }

  getViewMode(): ViewMode {
    return this.viewMode;
  }
}
