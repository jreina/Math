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
  }
};
