//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let resultado = 0;

//podemos usar un dowhile hasta que se pulse cancelar usando un confirm

do {
  let numeros = parseInt(prompt("ingrese numeros"));

  if (!isNaN(numeros)) {
    resultado = numeros++;
  } else {
    alert("no es un numero, ingrese de nuevo");
  }
} while (confirm("Desea continuar?"));

document.write("la suma de los numero es: " + resultado);
console.log(resultado);
