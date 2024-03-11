/* Declaro la constanta y le asignamos un conjunto de numeros */
const conjuntoDeNumeros=[1, 2, 3, 4];
/* Le indico el valor desde donde iniciará */
const valorDondeIniciar= 0; 

/* El metodo reduce ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. 
Su sintaxis es: arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])

Acumulador: acumula el valor devuelto por la función 
valorActual: el elemento actual que está siendo procesado en el array
Indice del elemento actual que está siendo procesado en el array. Empieza desde el índice 0 si se provee valorInicial. En caso contrario, comienza desde el índice 1.*/
const sumaConjuntoDeNumeros = conjuntoDeNumeros.reduce((acumulacion,valorAcumulado) => acumulacion + valorAcumulado, valorDondeIniciar,
 );
const multiplicacionConjuntoDeNumeros = conjuntoDeNumeros.reduce((acumulacion2,valorAcumulado2) => acumulacion2 * valorAcumulado2 
 );

 /* Imprimo los valores en la consola */
console.log(sumaConjuntoDeNumeros);
console.log(multiplicacionConjuntoDeNumeros); 
