// Class statisics 

class Statistics{
   constructor(){
   }

   Factorial(n){
      if(n > 0){
	 let b = 1;
	 for(let a = 1; a <= n; a++, b *= a);
	 return b;
      } else {
	 throw new Error("Factorial no definido para números negativos");
      }
   }

   Combinatorics(n,q){
      if(q > n){
	 throw new Error("El valor q debe ser mayor a n");
      }
      if(n<0 || q<0){
	 throw new Error("Los valores de n y q no pueden ser negativos");
      }

      return (this.Factorial(n))/(this.Factorial(q) * this.Factorial(n-q))
   }
}

export {
   Statistics
}
