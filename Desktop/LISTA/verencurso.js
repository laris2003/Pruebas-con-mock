import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js

export function verencurso()    {
console.clear();
console.log("═══════════════════════════════");
console.log("        TAREAS EN CURSO       ");
console.log("═══════════════════════════════");

for(let i=0; i<listaDeTareas.length; i++) {
    if(listaDeTareas[i].estado === "en progreso") {
        console.log(listaDeTareas[i]);
    }             }                                          


}// export sirve para usar la funcion en otros archivos