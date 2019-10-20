/**
 * Methods for geometric operations on circles.
 */
export const circle = {
  /**
   * Calculate the area of a circle with a given radius.
   * @param radius
   */
  area(radius: number) {
    if (radius < 0) throw new Error('Radius must be greater than 0!');
    if (typeof radius !== 'number') throw new Error('Radius must be a number!');
    return Math.PI * radius * radius;
  },
  /**
   * Calculate the circumference of a circle with a given diameter.
   * @param diameter
   */
  circumference(diameter: number) {
    if (diameter < 0) throw new Error('Diameter must be greater than 0!');
    if (typeof diameter !== 'number') throw new Error('Diameter must be a number!');
    return Math.PI * diameter;
  },
  circumference_radius(radius: number){
    if (radius < 0) throw new Error('Radius must be greater than 0');
    if (typeof radius !== 'number') throw new Error("Radius must be a number");
    return Math.PI * (2 * radius);
  },
    /**
   * Calculate the circumference of a circle with a given diameter.
   * @param diameter
   */
  calc_radius(diameter:number){
    if (diameter < 0) throw new Error('Diameter must be greater than 0!');
    if (typeof diameter !== 'number') throw new Error('Diameter must be a number!');
    return diameter/2;
  }
};
