// Primer programa en node 

// Importación de módulos
import Statistics from ("./Statistics.js");

// Statistics object
const stc = new Statistics();

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
console.log("Las combinaciones de 5 elementos tomados 2 a 2 es: "+stc.Combinatorics(5,2));

console.log();
console.log("Fin del programa");
