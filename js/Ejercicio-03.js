// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let resultado = "";
do {
  let text = prompt("ingrese palabras");
  if (resultado == "") {
    //guardo la cadena en resultado y despues concateno con resultado mas el ultimo texto ingresado
    resultado = text;
  } else {
    resultado = resultado + "-" + text;
  }
} while (confirm("Desea continuar?"));

document.write(resultado);
console.log(resultado);
