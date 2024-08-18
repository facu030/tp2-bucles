//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado

let cadena = prompt("ingrese texto")

for (let i = 0; i < cadena.length; i++) {

  switch (cadena[i]) {
    case "a":
      document.write("la vocal a se encuentra en la posicion : " + i );
      break;
    case "e":
        document.write("la vocal e se encuentra en la posicion : " + i );
      break;
    case "i":
        document.write("la vocal i se encuentra en la posicion : " + i );
      break;
    case "o":
        document.write("la vocal o se encuentra en la posicion : " + i );
      break;
    case "u":
        document.write("la vocal u se encuentra en la posicion : " + i );
      break;
  }
}