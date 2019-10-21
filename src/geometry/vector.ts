import { Vector2D } from '../types/Vector2D';
import { Vector3D } from '../types/Vector3D';
import { algebra } from '../algebra';

function dotProduct(a: Vector3D, b: Vector3D): number;
function dotProduct(a: Vector2D, b: Vector2D): number;
function dotProduct(a: Vector2D | Vector3D, b: Vector2D | Vector3D): number {
  return a.map((val, i) => val * b[i]).reduce(algebra.add);
}

export const vector = {
  /**
   * Calculate the length of a vector in R_2 or R_3
   * @param i
   * @param j
   * @param k
   */
  length(i: number, j: number, k?: number): number {
    k = k || 0;
    return Math.sqrt(i * i + j * j + k * k);
  },
  /**
   * Calculate the dot product of two vectors in R_2 or R_3
   */
  dotProduct
};
