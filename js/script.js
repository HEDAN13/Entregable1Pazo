function presentacion() {
  let nombre = prompt(
    "Sean bienvenidos a mi página de comisiones,\npor favor ingrese su nombre:"
  );
  return nombre;
}

function saludo(nombre) {
  alert(
    `Hola ${nombre},\nEn esta página podrás encontrar las comisiones que ofrezco y sus respectivos precios.`
  );
}

function seleccionarComision() {
  let comision = prompt(
    "¿Qué comisión deseas contratar?\n1. Imagen de perfil - $25\n2. Retrato de medio cuerpo - $60\n3. Retrato de mascota - $30\n4. Salir"
  );
  return comision;
}

function compra() {
  let comisionSeleccionada;
  let precioTotal = 0;
  const obrasSeleccionadas = [];
  do {
    comisionSeleccionada = parseInt(seleccionarComision());
    switch (comisionSeleccionada) {
      case 1:
        precioTotal += 25;
        obrasSeleccionadas.push({ estilo: "Imagen de perfil", precio: 25 });
        console.log("Has seleccionado: Imagen de perfil - $25");
        break;
      case 2:
        precioTotal += 60;
        obrasSeleccionadas.push({
          estilo: "Retrato de medio cuerpo",
          precio: 60,
        });
        console.log("Has seleccionado: Retrato de medio cuerpo - $60");
        break;
      case 3:
        precioTotal += 30;
        obrasSeleccionadas.push({ estilo: "Retrato de mascota", precio: 30 });
        console.log("Has seleccionado: Retrato de mascota - $30");
        break;
      case 4:
        console.log("Gracias por su compra!");
        break;
      default:
        alert("Opción no válida, por favor selecciona una opción del 1 al 4.");
        console.log(
          "Opción no válida, por favor selecciona una opción del 1 al 4."
        );
        break;
    }
  } while (comisionSeleccionada !== 4);
  return obrasSeleccionadas;
}

function main() {
  let nombreUsuario = presentacion();
  saludo(nombreUsuario);
  let trabajoSeleccionado = compra();
  if (trabajoSeleccionado.length > 0) {
    let opcion = prompt(
      "¿Deseas ver el resumen de tu compra? (si/no)"
    ).toLowerCase();
    if (opcion === "si") {
      console.log("Resumen de tu compra:");
      trabajoSeleccionado.forEach((obra, index) => {
        console.log(`${index + 1}. ${obra.estilo} - $${obra.precio}`);
      });
      let total = trabajoSeleccionado.reduce(
        (acc, obra) => acc + obra.precio,
        0
      );
      console.log(`Total a pagar: $${total}`);
      console.log("Gracias por visitar mi página de comisiones.");
    } else {
      console.log("Gracias por visitar mi página de comisiones.");
    }
  }
}

main();
