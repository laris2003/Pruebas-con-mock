import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js

export function vertareasterminadas()    {
    console.clear();
    console.log("Tareas terminadas:");  
    for(let i=0; i<listaDeTareas.length; i++) {
        if(listaDeTareas[i].estado === "completada") {
            console.log(listaDeTareas[i]);
        }   
    }
}// export sirve para usar la funcion en otros archivos
