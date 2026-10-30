// operaciones.js - Módulo de Reglas de Negocio
// operaciones.js - Módulo de Reglas de Negocio
export function agregarPlatillo(listaMeses, numMesa, platillo, cantidad, precio) {
  for (let i = 0; i < listaMeses.length; i++) {
    if (listaMeses[i].numeroMesa === numMesa) {
      let nuevoPedido = {
        nombrePlatillo: platillo,
        cantidad: cantidad,
        precioUnitario: precio
      };
      listaMeses[i].pedidos.push(nuevoPedido);
      console.log("Se agregó el platillo con éxito a la mesa " + numMesa);
      return;
    }
  }
  console.log("No se encontró la mesa " + numMesa);
}