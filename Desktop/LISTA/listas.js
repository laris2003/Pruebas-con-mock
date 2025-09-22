const tarea={
    titulo: "", // atributo de tipo string
    descripcion: "", // atributo de tipo string
    estado: "", // atributo de tipo string que puede ser "pendiente", "en progreso" o "completada"
    creacion: new Date(), // atributo de tipo Date que indica la fecha de creación de la tarea
    ultimaEdicion: new Date(), // atributo de tipo Date que indica la fecha de la última edición de la tarea
    vencimiento: new Date(), // atributo de tipo Date que indica la fecha de vencimiento de la tarea
    dificultad: 0 // atributo de tipo number que indica la dificultad de la tarea (1-5)
};

const listaDeTareas = []; // array que contendrá las tareas

function agregarTarea(tarea) {
    listaDeTareas.push(tarea);
};

function creartareas(titulo, descripcion, estado, vencimiento, dificultad) {
    const nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        estado: estado,
        creacion: new Date(),
        ultimaEdicion: new Date(),
        vencimiento: vencimiento,
        dificultad: dificultad
    };
    agregarTarea(nuevaTarea);      
};

export { listaDeTareas, agregarTarea, creartareas };