/* Declaramos una variable y le asignamos un conjunto de números */
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
/* 1. Escriba un comando que imprima todas las personas de la lista. */
console.log(gente.join(', ')); 

/* 2. Escribe el comando para eliminar "Juan" del array. 
!== lo utilizamos para verificar si los valores que se le agregan son estrictamente iguales a Dani, tanto el valor como su tipo de dato*/
let eliminarDani= gente.filter((persona) => persona !== "Dani"); 
console.log(eliminarDani);

/* 3. Escribe el comando para eliminar "Juan" del array. */
let eliminarJuan = eliminarDani.filter((persona2) => persona2 !== "Juan"); 
console.log(eliminarJuan); 

/* 4. Escribe el comando para mover a "Luis" al frente de la matriz. */
let moverLuis = (arreglo, nombre) => {
    arreglo.unshift(arreglo.splice(arreglo.indexOf(nombre), 1)[0]);
};
moverLuis(eliminarJuan, "Luis");
console.log(eliminarJuan);

/* 5. Escriba el comando para agregar su nombre al final de la matriz. */
let agregarNicol = eliminarJuan.push("Nicol"); 
console.log(eliminarJuan);

/* 6. Usando un bucle, itere a través de esta matriz y después de console.log "Maria", salga del bucle.*/

for (let i = 0; i < eliminarJuan.length; i++) {
    console.log(eliminarJuan[i]); 
    if (eliminarJuan[i] === "María"){
        break; 
    }
}
/* 7. Escribe el comando que da el indexOf donde se encuentra "Maria". */
let encontrarMaria = eliminarJuan.indexOf("María");
console.log(encontrarMaria); 