TP 1
PARADIGMAS.
NOMBRE: MASSAURAS LARA


Ejercicio 1
Parte A
Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de los cuatro componentes de un paradigma mencionados por Kuhn.

1.	Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?
Estructura de control:
if, else, switch (control de flujo)
for, while, do...while (iteración)
Bloques de código definidos con llaves {} para delimitar el alcance.
Declaración de variables:
var, let, const (aunque var es más tradicional en estructurado)
Funciones:
Definición tradicional con function nombre() { ... }
Paso de parámetros y retorno con return
Tipos de datos primitivos:
number, string, boolean, undefined, null
Operadores:
Aritméticos (+, -, *, /, %)
Lógicos (&&, ||, !)
Comparación (==, ===, !=, !==, >, <, >=, <=)
Reglas de alcance (scope):
Alcance de variables (función y bloque con let/const)
Semicolon (;) como finalizador opcional pero recomendado para evitar ambigüedades.

2.	Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?
Este componente tiene que ver con las ideas compartidas por la comunidad de desarrolladores sobre lo que hace a JavaScript atractivo o útil, particularmente en el contexto estructurado. Algunas creencias comunes son:
•	Facilidad de aprendizaje y uso: JavaScript tiene una sintaxis accesible para principiantes, especialmente cuando se usa de manera estructurada, sin clases ni funciones avanzadas.
•	Flexibilidad: Aunque JavaScript permite múltiples paradigmas, en el paradigma estructurado ofrece suficiente poder para construir lógica clara, especialmente útil para scripts sencillos y manipulación básica del DOM.
•	Amplio soporte y ecosistema: Hay una fuerte creencia en la comunidad de que JavaScript tiene uno de los ecosistemas más ricos (navegadores, herramientas, documentación).
•	Ubicuidad en el desarrollo web: Se considera casi obligatorio saber JavaScript si se trabaja en el desarrollo frontend, lo que refuerza su uso incluso en formas estructuradas básicas.
•	Ejecutabilidad inmediata en el navegador: No se necesita compilador, lo cual es percibido como una ventaja sobre lenguajes más rígidos como Java o C++.

Parte B
Considera el lenguaje JavaScript acotado al paradigma de programación estructurada y analízalo en términos de los ejes propuestos para la elección de un lenguaje de programación (¿Cómo elegir un lenguaje? ) y responde:
1.	¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?
2.	¿Es posible comprobar el código producido en ese lenguaje?
3.	¿Es confiable?
4.	¿Es ortogonal?
5.	¿Cuáles son sus características de consistencia y uniformidad?
6.	¿Es extensible? ¿Hay subconjuntos de ese lenguaje?
7.	El código producido, ¿es transportable?
1. ¿Tiene una sintaxis y una semántica bien definida? ¿Existe documentación oficial?
Sí.
•	Sintaxis: JavaScript tiene una sintaxis bien definida, especificada por el estándar ECMAScript (actualmente en su versión ES2024).
•	Semántica: También definida formalmente en ECMAScript, incluyendo cómo se comportan las estructuras de control, operadores, funciones, etc.
•	Documentación oficial:
o	La especificación oficial está en: https://262.ecma-international.org
o	Además, hay documentación práctica y ampliamente usada como la de MDN Web Docs: https://developer.mozilla.org

2. ¿Es posible comprobar el código producido en ese lenguaje?
Sí.
•	Puedes ejecutar y probar el código directamente en navegadores o entornos como Node.js.
•	Existen herramientas para verificación estática y control de calidad, como ESLint o TypeScript (si se desea tipado).
•	También puedes escribir tests automatizados con herramientas como Jest, Mocha o Jasmine.

3. ¿Es confiable?
Depende del contexto, pero en general, sí.
•	JavaScript es confiable para desarrollo web, donde es el estándar de facto.
•	Sin embargo, su flexibilidad puede introducir errores si no se aplica buena disciplina. Por eso:
o	Se recomienda el uso de "modo estricto" ("use strict";)
o	O incluso TypeScript para mejorar la robustez.
•	Su confiabilidad ha aumentado con los años gracias a mejoras en los motores (V8, SpiderMonkey) y herramientas de desarrollo.

4. ¿Es ortogonal?
No completamente.
•	La ortogonalidad se refiere a que las construcciones del lenguaje puedan combinarse libremente sin comportamientos inesperados.
•	En JavaScript, hay varias inconsistencias:
o	null y undefined son diferentes, pero se comportan de forma similar.
o	Coerción de tipos con == puede llevar a resultados confusos ('' == 0 es true)
o	Algunas estructuras funcionan distinto según el contexto (e.g., funciones como objetos, arrays que no son objetos planos, etc.)
•	Por tanto, no es completamente ortogonal.

5. ¿Cuáles son sus características de consistencia y uniformidad?
Tiene mejoras, pero aún arrastra inconsistencias históricas.
•	Inconsistencias históricas:
o	Comportamientos extraños con coerción de tipos (NaN !== NaN)
o	Manejo de this en funciones tradicionales vs. flecha
•	Mejoras en uniformidad:
o	Las versiones modernas de ECMAScript han mejorado la consistencia del lenguaje.
o	Uso de let y const con scope de bloque, frente al problemático var
•	Sin embargo, el lenguaje aún no es perfectamente uniforme, y puede sorprender a programadores novatos.

6. ¿Es extensible? ¿Hay subconjuntos de ese lenguaje?
Sí, es extensible. Y sí, tiene subconjuntos.
•	Extensibilidad:
o	Se pueden agregar nuevas funciones, métodos, objetos o incluso comportamientos usando prototipos.
o	Herramientas como Babel permiten usar nuevas características aún no soportadas nativamente.
•	Subconjuntos:
o	Strict Mode ("use strict") define un subconjunto más riguroso del lenguaje.
o	JS estructurado (como el que analizas) es un subconjunto que evita POO y funciones de orden superior.
o	TypeScript se considera un superset (superconjunto) de JavaScript, agregando tipos estáticos.

7. El código producido, ¿es transportable?
Sí, altamente transportable (dentro del ecosistema web).
•	Puedes ejecutar JavaScript en:
o	Todos los navegadores modernos
o	Servidores (con Node.js)
o	Aplicaciones móviles híbridas (con React Native, Ionic, etc.)
o	Aplicaciones de escritorio (Electron)
•	Sin embargo, hay que considerar:
o	Diferencias de implementación entre navegadores antiguos o versiones antiguas de ECMAScript.
o	Para máxima compatibilidad, a veces se transpila el código (por ejemplo, usando Babel).
