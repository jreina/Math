export const triangle = {
  area(base: number, height: number): number {
    return (base * height) / 2;
  },
    /**
   * Determines if a triangle can be ade with 3 given lengths(c must be the longest side)
   * @param a
   * @param b
   * @param c
   */

  isTriangle(a : number, b : number, c: number): boolean{
    if((c > a && c > b) && (a+b>c))
    return true;
    return false;
  },
     /**
   * Determines if a triangle is a right triangle
   * @param a
   * @param b
   * @param c
   */
  isRightTriangle(a : number, b : number, c: number): boolean{
    if(this.isTriangle(a,b,c))
    if(c > a && c > b) {
      if(c**2>(a**2+b**2)) return false;
      if(c**2<(a**2+b**2)) return false;
      if(c**2===(a**2+b**2)) return true;
    } throw new Error("c must be the largest value");
  },
     /**
   * Determines if a triangle is an acute triangle
   * @param a
   * @param b
   * @param c
   */
  isAcuteTriangle(a : number, b : number, c: number): boolean{
    if(this.isTriangle(a,b,c))
    if(c > a && c > b) {
      if(c**2>(a**2+b**2)) return false;
      if(c**2===(a**2+b**2)) return false;
      if(c**2<(a**2+b**2)) return true;
    } throw new Error("c must be the largest value");
  },
     /**
   * Determines if a triangle is a obtuse triangle
   * @param a
   * @param b
   * @param c
   */
  isObtuseTriangle(a : number, b : number, c: number): boolean{
    if(this.isTriangle(a,b,c))
    if(c > a && c > b) {
      if(c**2<(a**2+b**2)) return false;
      if(c**2===(a**2+b**2)) return false;
      if(c**2>(a**2+b**2)) return true;
    } throw new Error("c must be the largest value");
  },
     /**
   * Determines the type of triangle 
   * @param a
   * @param b
   * @param c
   */
  typeOfTriangle(a : number, b : number, c: number): string{
    if(this.isTriangle(a,b,c))
    if(c > a && c > b) {
      if(c**2<(a**2+b**2)) return "This is an acute triangle";
      if(c**2>(a**2+b**2)) return "This is an obtuse triangle";
      if(c**2===(a**2+b**2)) return "This is a right triangle";
    } throw new Error("c must be the largest value");
  }
};
