/* Declaramos dos variables, cada una con su conjunto de números */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

/* filtes: es un método que crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
sintaxis: let newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
currentValue: es el elemento actual del array que está siendo procesado.
index: índice del elemento actual del array que está siendo procesado.
array: El array sobre el que se ha llamado filter
thisArg: Valor a utilizar como this cuando se ejecuta callback
*/

/* includes: determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
sintaxis: arr.includes(searchElement[, fromIndex])
serchElement: El valor a buscar.
fromIndex: Posición en la matriz en la cuál se debe comenzar a buscar serchElement; el primer caracter a buscar se encuentra en fromIndex */
let cursoEnComun = student1Courses.filter((cursos) => student2Courses.includes(cursos)); 
console.log(cursoEnComun);  
 