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

export function calcularCuenta(mesa) {
  let subtotal = 0;

  for (let i = 0; i < mesa.pedidos.length; i++) {
    let item = mesa.pedidos[i];
    subtotal = subtotal + (item.cantidad * item.precioUnitario);
  }

  let propinaServicio = subtotal * 0.10;
  let granTotal = subtotal + propinaServicio;

  return {
    numeroMesa: mesa.numeroMesa,
    pedidos: mesa.pedidos,
    subtotal: subtotal,
    propina: propinaServicio,
    totalPagar: granTotal
  };
}