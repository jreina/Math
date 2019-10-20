import { iPoint } from './iPoint';
export const algebra = {
  subtract(a: number, b: number): number {
    return a - b;
  },
  add(a: number, b: number): number {
    return a + b;
  },
  multiply(a: number, b: number): number {
    return a * b;
  },
  divide(a: number, b: number): number {
    return a / b;
  },
  /**
   * function for finding the slope of two points.
   */
  slope(pointX1: number, pointY1: number, pointX2: number, pointY2: number) {
    const m = (pointY2 - pointY1) / (pointX2 - pointX1);
    return m;
  },
  midpoint(point1: iPoint, point2: iPoint): iPoint {
    const medX = (point1.x + point2.x) / 2;
    const medY = (point1.y + point2.y) / 2;
    let midPoint: iPoint = {
      x: medX,
      y: medY
    };
    return midPoint;
  },
  distance(point1: iPoint, point2: iPoint): number {
    const dist = Math.sqrt(
      (point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2
    );
    return dist;
  }
};
