/* Declaramos la variable y le asignamos un conjunto de numeros */
let conjuntoDeNumeros = [1, 2, 4, 5];
/* El método map crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos. Utilizo una función flecha que es una alternativa simplificada para una expresion de una funcion */
let metodoMap = conjuntoDeNumeros.map((num) => num*2);
/* Imprimo metodoMap */
console.log(metodoMap); // [2, 4, 8, 10]

