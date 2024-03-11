/* Declarar una variable con un conjunto de numeros */
const arregloDeNumeros = [3, 6, 12, 5, 100, 1]; 
/* Asignamos la función, la nombremos y le damos los parametros a y b. Lo que nos indica que de nuestro arreglo va a tomar
 los primeros dos numeros a lo cual: 
 si a<b va a regresar un valor, si a>b va a avanzar 1 valor y si no cumple ninguna de las dos caracteristicas (a=b) 
 no va a avanzar */
function algoritmoburbuja(a,b){
    if (a<b){
        return -1 ; 
    }else if ( a > b ) { 
        return 1; 
    } else {
        return 0;
    } 
}
function comparacion ( a, b){
    return a-b;
}
console.log(arregloDeNumeros.sort(comparacion)); 
