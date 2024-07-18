// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let cadena;
while (true) {
  let confirma = confirm(
    "introducir cadenas de texto prewsione aceptar cancelar para salir"
  );

  if (confirma == true) {
    document.write("-" + cadena);
    console.log(cadena)
  } else if (confirma == false) {
    let cadena = prompt("ingrese cadenas de texto");
  }
}
