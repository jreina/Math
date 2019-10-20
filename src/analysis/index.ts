export const analysis = {
    /**
     * Find nodes for a Chebychev Polynomial, T_n(x) = cos(n*arcos(x)) for |x| <= 1. Useful for approximating values of cosine up to the amount of nodes you use.
     */
    chebychevPoly(n: number, x: number) {
        return (2 * x * Math.cos(n * Math.acos(x))) - (Math.cos((n-1) * Math.acos(x))); 
    }
};
