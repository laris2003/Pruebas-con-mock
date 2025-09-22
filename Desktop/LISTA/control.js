import { creartareas } from "./listas.js"; // Función que agrega la tarea al array
import { listaDeTareas } from "./listas.js"; // Array de tareas

import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function agregarTarea() {
    console.clear();

    console.log("═══════════════════════════════");
    console.log("        AGREGAR NUEVA TAREA     ");
    console.log("═══════════════════════════════");

    // --- Título (obligatorio)
    let titulo;
    while (true) {
        titulo = prompt("Ingrese el título de la tarea: ").trim();
        if (titulo !== "") break;
        console.log("El título no puede estar vacío. Intente nuevamente.");
    }

    // --- Descripción (obligatoria)
    let descripcion;
    while (true) {
        descripcion = prompt("Ingrese la descripción de la tarea: ").trim();
        if (descripcion !== "") break;
        console.log("La descripción no puede estar vacía. Intente nuevamente.");
    }

    // --- Estado (opcional)
    const estadosValidos = ["pendiente", "en progreso", "completada"];
    let estado;
    while (true) {
        estado = prompt("Ingrese el estado de la tarea (pendiente, en progreso, completada) [opcional]: ").trim().toLowerCase();
        if (estado === "") {
            estado = "(Sin información)";
            break;
        }
        if (estadosValidos.includes(estado)) break;
        console.log("Estado inválido. Debe ser 'pendiente', 'en progreso' o 'completada'.");
    }

    // --- Fecha de vencimiento (opcional)
    let vencimientoInput = prompt("Ingrese la fecha de vencimiento de la tarea (YYYY-MM-DD) [opcional]: ").trim();
    let vencimiento;
    if (vencimientoInput === "") {
        vencimiento = "(Sin información)";
    } else {
        vencimiento = new Date(vencimientoInput);
        if (isNaN(vencimiento.getTime())) {
            console.log("Fecha inválida. Se guardará como '(Sin información)'.");
            vencimiento = "(Sin información)";
        } else {
            // Convertir a formato YYYY-MM-DD para mostrar uniformemente
            vencimiento = vencimiento.toISOString().split("T")[0];
        }
    }

    // --- Dificultad (opcional)
    let dificultadInput = prompt("Ingrese la dificultad de la tarea (1-5) [opcional]: ").trim();
    let dificultad;
    if (dificultadInput === "") {
        dificultad = "(Sin información)";
    } else {
        dificultad = parseInt(dificultadInput);
        if (isNaN(dificultad) || dificultad < 1 || dificultad > 5) {
            console.log("Dificultad inválida. Se guardará como '(Sin información)'.");
            dificultad = "(Sin información)";
        }
    }

    // --- Crear la tarea usando la función importada
    creartareas(titulo, descripcion, estado, vencimiento, dificultad);

    // --- Mensaje final decorado
    console.log("═══════════════════════════════");
    console.log("       TAREA AGREGADA         ");
    console.log("═══════════════════════════════");
}
