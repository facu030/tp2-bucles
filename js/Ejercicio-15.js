//15- Realiza un script que cuente el número de vocales que tiene un texto.

let contador = 0;

let texto = prompt("ingrese un texto");
texto = texto.toLowerCase(); // para que todo sea en minuscula

for (let i = 0; i < texto.length; i++) {
    //puedo usar el texto[] o texto.charat(i) los dos van a tomar el valor de i a medida que este crece y lo va sumando
  switch (texto.charAt(i)) {
    case "a":
      contador++;
      break;
    case "e":
      contador++;
      break;
    case "i":
      contador++;
      break;
    case "o":
      contador++;
      break;
    case "u":
      contador++;
      break;
  }
}
document.write("la cantidad de vocales del texto : " + contador);