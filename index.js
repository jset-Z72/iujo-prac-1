/* Primer programa en node */

function Factorial(n){
   if(n >= 0){
      let a = 1;
      for(let i = 1; i <= n; i++){
	 a *= i; 
      }
      return a;
   } else {
      throw new Error("This factorial no accept negative numbers!");
   }
}

/* Funcion del factorial */

console.log("El Factorial de 4 es "+Factorial(4));

console.log("Fin del programa");
