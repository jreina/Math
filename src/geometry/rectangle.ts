/**
 * Methods for geometric operations on rectangles.
 */
export const rectangle = {
  /**
   * Calculate the area of a rectangle with a given length and width.
   * @param length
   * @param width
   */
  area(length: number, width: number):number {
    if (length < 0) throw new Error('Length must be greater than 0!');
    if (width < 0) throw new Error('Width must be greater than 0!');
    if (typeof length !== 'number') throw new Error('Length must be a number!');
    if (typeof width !== 'number') throw new Error('Width must be a number!');
    return length * width;
  },
  perimeter(length: number, width: number):number {
    if (length < 0) throw new Error('Length must be greater than 0!');
    if (width < 0) throw new Error('Width must be greater than 0!');
    if (typeof length !== 'number') throw new Error('Length must be a number!');
    if (typeof width !== 'number') throw new Error('Width must be a number!');
    return 2 * (length + width);
  }
};