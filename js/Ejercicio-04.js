//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma;

while (true) {
  let confirmar = window.confirm(
    "introducir numeros presione aceptar y cancelar para salir"
  );

  if (confirmar == true) {
    let numeros = parseInt(prompt("ingrese numeros"));
    if (isNaN(numeros)) {
      alert("No es un numero");
    } else {
      let numeros = parseInt(prompt("ingrese numeros"));
    }
  } else if (confirmar == false) {
    suma +- numeros;
    document.write("la suma es " + suma);
    console.log(suma);
  }
}
