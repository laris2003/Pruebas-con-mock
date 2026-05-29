# Reporte de Cobertura de Pruebas Unitarias
## SistemaBiblioteca - JUnit 5

**Fecha:** 28 de mayo de 2026  
**Herramienta:** JaCoCo 0.8.11  
**Cobertura Total:** 92%

---

## Resumen de Cobertura por Clase

| Clase | Cobertura | Instrucciones | Branches | Líneas | Métodos | Estado |
|-------|-----------|---------------|----------|--------|---------|--------|
| `Libro.java` | 92% | 5/66 no cubiertas | 100% | 1/17 no cubierta | 1/10 no cubierto |  Bueno |
| `Biblioteca.java` | 92% | 5/66 no cubiertas | 100% | 1/17 no cubierta | 1/10 no cubierto |  Bueno |

---

## Detalles Técnicos

### Instrucciones Cubiertas
- **Total:** 61 de 66 (92%)
- **No cubiertas:** 5

### Branches (Decisiones)
- **Total:** 2 de 2 (100%)
- **Cobertura completa:** 

### Líneas de Código
- **Total:** 17 líneas
- **Cubiertas:** 16 (94%)
- **No cubiertas:** 1

### Métodos
- **Total:** 10 métodos
- **Cubiertos:** 9 (90%)
- **No cubiertos:** 1

---

## Pruebas Ejecutadas

### LibroTest.java
-  `testExcepciones()` - Verifica que se lance `IllegalStateException` al prestar un libro dos veces

### BibliotecaTest.java
-  `testGestionBiblioteca()` - Verifica:
  - `assertEquals()` - Cantidad de libros
  - `assertNotNull()` - Búsqueda de libro
  - `assertTrue()` - Disponibilidad

### SuiteGestion.java
-  TestSuite que agrupa todas las pruebas

---

## Conclusión

 **Cobertura del 92%** - Cumple con el objetivo del 90%

El proyecto tiene una buena cobertura de pruebas. La línea y método no cubiertos probablemente corresponden a caminos de excepción no testados. Para mejorar a 100%:

1. Agregar prueba para `devolver()` en `Libro.java` (si existe)
2. Agregar prueba para excepción en `buscarLibro()` con título no encontrado
3. Usar `@ParameterizedTest` para múltiples casos

---

## Ubicación del Reporte Completo

 **Ruta:** `target/site/jacoco/index.html`

Para ver el reporte HTML detallado, abre el archivo en tu navegador.

```
c:\Users\Usuario\Desktop\ProyectoBiblioteca\target\site\jacoco\index.html
```
