import { listaDeTareas } from "./listas.js";// Importa el array listaDeTareas desde el archivo listas.js
import promptSync from 'prompt-sync'; // Importa la librería prompt-sync para entrada de usuario
const prompt = promptSync(); // Inicializa prompt-sync para entrada de usuario

export function editarTarea(indice) {
    console.clear();
    if(indice >= 0 && indice < listaDeTareas.length) {
console.log("═══════════════════════════════");
console.log("       ✏️ MENÚ DE EDICIÓN       ");
console.log("═══════════════════════════════");
console.log("1️⃣  ✏️  Editar Título");
console.log("2️⃣  📝  Editar Descripción");
console.log("3️⃣  📌  Editar Estado");
console.log("4️⃣  📅  Editar Vencimiento");
console.log("═══════════════════════════════");

        let opcion = prompt("Ingrese una opción (1-4): ");
        switch(opcion) {
            case "1":
                let nuevoTitulo = prompt("Ingrese el nuevo título: ");
                listaDeTareas[indice].titulo = nuevoTitulo;
                console.log("Título actualizado.");
                break;
            case "2":
                let nuevaDescripcion = prompt("Ingrese la nueva descripción: ");
                listaDeTareas[indice].descripcion = nuevaDescripcion;   
                console.log("Descripción actualizada.");
                break;
            case "3":
                let nuevoEstado = prompt("Ingrese el nuevo estado (pendiente, en curso, terminada): ");
                if(["pendiente", "en curso", "terminada"].includes(nuevoEstado)) {
                    listaDeTareas[indice].estado = nuevoEstado;
                    console.log("Estado actualizado."); 
                } else {
                    console.log("Estado inválido. No se realizaron cambios.");
                }
                break;
                case "4":
                let nuevaFecha = prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD): ");
                let fechaVencimiento = new Date(nuevaFecha);
                if(!isNaN(fechaVencimiento.getTime())) {
                    listaDeTareas[indice].vencimiento = fechaVencimiento;
                    console.log("Fecha de vencimiento actualizada.");
                }
                else {
                    console.log("Fecha inválida. No se realizaron cambios.");
                }   
                break;
            default:
                console.log("Opción inválida. No se realizaron cambios.");
                break;
        }
    } else {
        console.log("Índice inválido. No se realizaron cambios.");
    }
}
