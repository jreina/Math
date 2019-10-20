export const trapezoid = {
/**
 * Methods for calculating values for trapezoids
 * @param base1
 * @param base2
 * @param height
 */
area(base1:number,base2:number,height:number):number{
if(base1 > 0 && base2> 0 && height>0) 
return height*(base1+base2)/2;
throw new Error("The bases and height must have a value greater than 0.");
},
median(base1:number,base2:number){
    if(base1 > 0 && base2> 0) 
    return (base1+base2)/2;
    throw new Error("The bases must have a value greater than 0.");  
},
areaMedian(base1:number,base2:number,height:number){
    const med = this.median(base1,base2);
    if(base1 > 0 && base2> 0 && height>0) {
        return height*med;}
    throw new Error("The bases and height must have a value greater than 0.");
}
}

