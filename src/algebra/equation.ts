export const equation = {
    /**
     * function for finding an equation from a point and slope
     */
   equation(x: number, y: number, m: number) {
       const b = y-(m*x)
       const equation = "y="+m+"x + "+b
       return equation;
   }
}
