// app.js - Módulo Principal (Ejecución)
import { mesas } from './datos.js';
import { agregarPlatillo, calcularCuenta } from './operaciones.js';

// app.js - Módulo Principal (Ejecución)
import { mesas } from './datos.js';
import { agregarPlatillo, calcularCuenta } from './operaciones.js';

console.log("INICIO DE LA JORNADA EN EL RESTAURANTE");
console.log("Estado inicial de las mesas cargado correctamente.\n");

// app.js - Módulo Principal (Ejecución)
import { mesas } from './datos.js';
import { agregarPlatillo, calcularCuenta } from './operaciones.js';

console.log("INICIO DE LA JORNADA EN EL RESTAURANTE");
console.log("Estado inicial de las mesas cargado correctamente.\n");

console.log("ACCIÓN DEL MESERO: Agregando nuevos platos a la Mesa 1");
agregarPlatillo(mesas, 1, "Papas Fritas", 1, 12000);
agregarPlatillo(mesas, 1, "Helado de Chocolate", 2, 8000);

// app.js - Módulo Principal (Ejecución)
import { mesas } from './datos.js';
import { agregarPlatillo, calcularCuenta } from './operaciones.js';

console.log("INICIO DE LA JORNADA EN EL RESTAURANTE");
console.log("Estado inicial de las mesas cargado correctamente.\n");

console.log("ACCIÓN DEL MESERO: Agregando nuevos platos a la Mesa 1");
agregarPlatillo(mesas, 1, "Papas Fritas", 1, 12000);
agregarPlatillo(mesas, 1, "Helado de Chocolate", 2, 8000);

console.log("ESTADO ACTUALIZADO DE LA MESA 1");
const mesa1Actualizada = mesas.find(m => m.numeroMesa === 1);
console.log(mesa1Actualizada);
console.log("\n");